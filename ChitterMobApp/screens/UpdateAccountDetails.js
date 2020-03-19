import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

	 
class UpdateAccountDetails extends Component {

	constructor(props){
	super(props);
		this.state={
			given_name: "",
			family_name: "",
			email:  "",
			password:  ""
		};
	}
	render() {
	return (
		<View>
			<TextInput
				placeholder = "Enter first name"
				onChangeText={(given_name) => this.setState({given_name})}
				value ={this.state.given_name}
			/>
			<TextInput
				placeholder = "Enter surname"
				onChangeText={(family_name) => this.setState({family_name})}
				value ={this.state.family_name}
			/>
			<TextInput
				placeholder = "Enter e-mail"
				onChangeText={(email) => this.setState({email})}
				value ={this.state.email}
			/>
				 
			<TextInput
				placeholder = "Enter password"
				onChangeText={(password) => this.setState({password})}
				value ={this.state.password}
			/>
				 
			<Button
				title="Update Details"
				onPress={this.editUser}
			/>
				
		</View>
		);
	}
	 
	editUser = () => {
		return fetch("http://10.0.2.2:3333/api/v0.0.5/user/" + userId,
		{
			method: 'PATCH',
			headers:{'Content-Type': 'application/json','X-Authorization' : authToken},
			body: JSON.stringify({
			given_name: this.state.given_name,
			family_name: this.state.family_name,
			email: this.state.email,
			password: this.state.password
			})
		})
		.then((response) => {
			Alert.alert("Details Changed");
			this.props.navigation.navigate('Home')
		})
		.catch((error) => {
			console.error(error);
		});
	}

}
export default UpdateAccountDetails