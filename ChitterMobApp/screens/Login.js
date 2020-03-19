import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            id: "",
			token: ""
        };
    }
	
    render() {
		//
        return (
		<View>
            <TextInput
			placeholder = "Enter e-mail"
            onChangeText = {(email) => this.setState({ email }) }
            />
			
			<TextInput 
			placeholder = "Enter password"
            onChangeText = {(password) => this.setState({ password }) }
            />
			
			<Button
			title = "Login"
            onPress={this.LogIn}
            />
		</View>
        );
    }

    LogIn = () => {
        return fetch("http://10.0.2.2:3333/api/v0.0.5/login", {
                method: 'POST',
				headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                })
            })
            .then((response) => response.json()).then((responseJson) => {
				let userDetails = responseJson;
				global.authToken=userDetails.token;
				global.userId=userDetails.id;
				this.props.navigation.navigate('HomeScreen')
			})
            .catch((error) => {
                console.error(error);
            });

    }

}
export default Login