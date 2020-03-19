import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
	 
class SearchUser extends Component {

	constructor(props){
	super(props);
		this.state={
			userList: []

		};
	} 

	render() {
	return (
		<View>
			<Text> {this.state.userList.id} </Text>
			<Text> {this.state.userList.given_name} </Text>
			<Text> {this.state.userList.family_name} </Text>
			<Text> {this.state.userList.email}</Text>
			{this.props.navigation.state.params.searchID == userId ? <Button title="Update Details"
																	onPress={() => this.props.navigation.navigate('UpdateAccountDetails')}
																	/>: null}
																	
			{this.props.navigation.state.params.searchID != userId ? <Button title="Follow"
			onPress={this.FollowUser}
			/>: null}
			
			{this.props.navigation.state.params.searchID != userId ? <Button title="Unfollow"
			onPress={this.UnfollowUser}
			/>: null}
			
			<Button title="Followers" onPress={() => this.props.navigation.navigate('FollowersScreen', {  FollowersFor : this.props.navigation.state.params.searchID})}
			/>
			
			<Button title="Following" onPress={() => this.props.navigation.navigate('FollowingScreen', {  FollowingID : this.props.navigation.state.params.searchID})}
			/>
		</View>
		);
	}
	
	 componentDidMount(){
		 this.getUserDetails();
	 }
	 
		getUserDetails(){
		return fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + this.props.navigation.state.params.searchID)
		.then((response) => response.json())
		.then((responseJson) => {
			
			console.log("Mounted")
			
			this.setState({
				isLoading: false,
				userList: responseJson,
			});
			
			
		})
		.catch((error) => {
			console.log(error)
		});
	}
	
	FollowUser = () =>  {
		return fetch("http://10.0.2.2:3333/api/v0.0.5/user/" + this.props.navigation.state.params.searchID + "/follow",
		{
			method: 'POST',
			headers:{'Content-Type': 'application/json','X-Authorization' : authToken},
			})
		.then((response) => {
			Alert.alert("Succesfully followed");
		})
		.catch((error) => {
			console.error(error);
		});
	}
	
	UnfollowUser = () =>  {
		return fetch("http://10.0.2.2:3333/api/v0.0.5/user/" + this.props.navigation.state.params.searchID + "/follow",
		{
			method: 'DELETE',
			headers:{'Content-Type': 'application/json','X-Authorization' : authToken},
			})
		.then((response) => {
			Alert.alert("Succesfully unfollowed");
		})
		.catch((error) => {
			console.error(error);
		});
	}
}
export default SearchUser