import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

class startingScreen extends Component {
	
headershown: false

 render() {
 return (
	<View>
	<Button
		 title="Register"
		 onPress={() => this.props.navigation.navigate('Register')}
	/>
	<Button
		 title="Login"
		 onPress={() => this.props.navigation.navigate('Login')}
	/>
	</View>
 );
 }
}
export default startingScreen