import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert, FlatList } from 'react-native';

	 
class SearchUser extends Component {

	constructor(props){
	super(props);
		this.state={
			userList: [],
			searchQuery :"",
			//global.userID
		};
	}
	
	render() {
	return (
		<View>
			<TextInput
				placeholder = "Enter E-mail,First or last name of user"
				onChangeText={(searchQuery) => this.setState({searchQuery})}
				value ={this.state.searchQuery}
			/>
			<FlatList data={this.state.userList}
				renderItem={({item}) => (
				
				<View>
					<Text>{item.given_name}</Text>
					<Text>{item.family_name}</Text>
					<Button
						title ="More info " 
						onPress={() =>  this.props.navigation.navigate('UserDetailsScreen', {  searchID: item.user_id})} 
						
						/>
						
				</View>
				)}
				keyExtractor={({id}, index) => id}
			/>
			<Button
				title="Search"
				onPress={this.getUser}
			/>
				
		</View>
		);
	}
	
	 
	getUser = () =>{
		
		return fetch('http://10.0.2.2:3333/api/v0.0.5/search_user?q=' + this.state.searchQuery)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				userList: responseJson,
			});
			
			console.log(this.state.UserList);
		})
		.catch((error) => {
			console.log(error)
		});
	}
}
export default SearchUser