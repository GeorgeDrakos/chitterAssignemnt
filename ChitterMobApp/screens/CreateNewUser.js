import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

class CreateNewUser extends Component {
 constructor(props){
 super(props);
 this.state={
	 first_name: '',
	 surname: '',
	 e_mail:  '',
	 pw:  ''
 };
 }
 render() {
 return (
	<View>
	<TextInput
	 placeholder = "Enter first name"
	 onChangeText={(text) => this.setState({text})}
	 />
	 <TextInput
	 placeholder = "Enter surname"
	 onChangeText={(text) => this.setState({text})}
	 />
	 <TextInput
	 placeholder = "Enter e-mail"
	 onChangeText={(text) => this.setState({text})}
	 />
	 <TextInput
	 placeholder = "Enter password"
	 onChangeText={(text) => this.setState({text})}
	 />
	 	<Button
	title="Register"
	onPress={this.addUser}
	/>
	</View>
 );
 }
 
 addUser = () => {
 return fetch("http://10.0.2.2:3333/api/v0.0.5/user",
 {
 method: 'POST',
 body: JSON.stringify({
 given_name: this.state.first_name,
 family_name: this.state.surname,
 email: this.state.e_mail,
 password: this.state.pw,
 })
 })
 .then((response) => {
 Alert.alert("User Added!");
 })
 .catch((error) => {
 console.error(error);
 });
 }

}
export default CreateNewUser