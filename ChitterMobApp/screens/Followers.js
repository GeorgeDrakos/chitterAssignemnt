import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert, FlatList } from 'react-native';

	 
class Followers extends Component {

	constructor(props){
	super(props);
		this.state={
			userList: [],
		};
	}
	 componentDidMount(){
		 this.getFollowers();
	 }
	render() {
	return (
		<View>
			<FlatList data={this.state.userList}
				renderItem={({item}) => (
				
				<View>
					<Text>{item.given_name}</Text>
					<Text>{item.family_name}</Text>						
				</View>
				)}
				keyExtractor={({id}, index) => id}
			/>				
		</View>
		);
	}
	 
	getFollowers(){
		return fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + this.props.navigation.state.params.FollowersFor + '/followers')
		
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				userList: responseJson,
			});
			console.log(responseJson)
		})
		.catch((error) => {
			console.log(error)
		});
	}
}
export default Followers