import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateNewUser from './screens/CreateNewUser'

		const AppStackNav = createStackNavigator({
			Home: {
				screen: CreateNewUser
			}
		});	
		
		const AppContainer = createAppContainer(AppStackNav)
		
export default AppContainer;