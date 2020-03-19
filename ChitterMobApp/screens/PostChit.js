import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';

	 
class PostChit extends Component {

	constructor(props){
	super(props);
		this.state={
			post:""
		};
	}
	render() {
	return (
		<View>
			<TextInput
				placeholder = "What's on your mind?"
				onChangeText = {(post) => this.setState({ post }) }
				maxLength = {141}
			/>
				 
			<Button
				title="Post"
				onPress={this.Post}
			/>
				
		</View>
		);
	}
	
	Post = () => {
        return fetch("http://10.0.2.2:3333/api/v0.0.5/chits", {
                method: 'POST',
				headers:{'Content-Type': 'application/json','X-Authorization': authToken},
                body: JSON.stringify({
                    chit_id: 0,
					timestamp: 0,
					chit_content: this.state.post,
					location:{longitude:0, latitude:0},
					user: {user_id: userId,given_name: this.state.given_name,family_name: this.state.family_name,email: this.state.email}
                })
            })
            .then((response) => {
				Alert.alert("Chit posted");
			})
            .catch((error) => {
                console.error(error);
            });
	}
}
export default PostChit