import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FlatList, Button, Alert } from 'react-native';

class HomeScreen extends Component {
		 constructor(props) {
		super(props);
		 this.state ={
			 isLoading: true,
			 chitListData: []
		}
	}
		 componentDidMount(){
		 this.getData();
	 }
	 
	 	getData(){
		return fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
		method: 'GET',
		headers:{'Content-Type': 'application/json','X-Authorization': authToken},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			
			console.log("Mounted")
			
			this.setState({
				isLoading: false,
				chitListData: responseJson,
			});
			
			console.log(this.state.chitListData);
			
		})
		.catch((error) => {
			console.log(error)
		});
	}
	
 render(){
	if(this.state.isLoading){
		return(
			<View>
				<ActivityIndicator/>
			</View>
		);
	}

	return(
		<View>
			<FlatList data={this.state.chitListData}
			renderItem={({item}) => (
				<View>
					<Text>{item.chit_content}</Text>
				</View>
				)}
			keyExtractor={({id}, index) => id}
		/>
		
		<Button
			title = "Post Chit"
			onPress={() => this.props.navigation.navigate('PostChitScreen')}
			/>
			
		<Button
			title = "Search user"
			onPress={() => this.props.navigation.navigate('SearchUserScreen')}
			/>
			
		<Button
			title = "Logout"
            onPress={this.Logout}
            />
		<Button
			title = "My details"
			onPress={() => this.props.navigation.navigate('UserDetailsScreen', {  searchID: userId})}
			/>
		</View>
		);
 }
 
     Logout = () => {
        return fetch("http://10.0.2.2:3333/api/v0.0.5/logout", {
                method: 'POST',
				headers:{'Content-Type': 'application/json','X-Authorization' : authToken}
            })
            .then((response) => {
				Alert.alert("User logged out");
				this.props.navigation.navigate('Login')
			})
		
		.catch((error) => {
			console.error(error);
		});

    }
}

export default HomeScreen;