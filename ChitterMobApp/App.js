import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateNewUser from './screens/CreateNewUser'
import startingScreen from './screens/startingScreen'
import LoginScreen from './screens/Login'

		const AppStackNav = createStackNavigator({
			 Home: {
				 screen: startingScreen
			},
			Register: {
				 screen: CreateNewUser
			},
			Login: {
				 screen: LoginScreen
			}
		});
		
		const AppContainer = createAppContainer(AppStackNav)
		
export default AppContainer;