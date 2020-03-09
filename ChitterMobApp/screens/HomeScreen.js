import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';

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
		return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
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
		</View>
		);
 }
}

export default HomeScreen;