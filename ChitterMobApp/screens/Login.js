import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

class CreateNewUser extends Component {
 constructor(props){
 super(props);
 this.state={
	 e_mail:  '',
	 pw:  '',
	 X-Authorization: '',
	 id : ''
 };
 }
 render() {
 return (
	<View>
	 <TextInput
	 placeholder = "Enter e-mail"
	 onChangeText={(text) => this.setState({text})}
	 />
	 <TextInput
	 placeholder = "Enter password"
	 onChangeText={(text) => this.setState({text})}
	 />
	 	<Button
	title="Login"
	onPress={this.LogIn}
	/>
	</View>
 );
 }
 
 LogIn = () => {
 return fetch("http://10.0.2.2:3333/api/v0.0.5/login",
 {
 method: 'POST',
 body: JSON.stringify({
 email: this.state.e_mail,
 password: this.state.pw,
 })
 })
 .then((response) => {
	 // NOT SURE HOW TO DO THIS!!
 })
 .catch((error) => {
 console.error(error);
 });
 
 }

}
export default CreateNewUser