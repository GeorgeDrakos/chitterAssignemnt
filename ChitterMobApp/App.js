import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateNewUser from './screens/CreateNewUser'
import startingScreen from './screens/startingScreen'
import LoginScreen from './screens/Login'
import HomeScreen from './screens/HomeScreen'
import Followers from './screens/Followers'
import Following from './screens/Following'
import PostChit from './screens/PostChit'
import SearchUser from './screens/SearchUser'
import UserDetails from './screens/UserDetails'
import UpdateAccountDetails from './screens/UpdateAccountDetails'

		//App navigation
		const AppStackNav = createStackNavigator({
			Home: {
				 screen: startingScreen
			},
			Register: {
				 screen: CreateNewUser
			},
			Login: {
				 screen: LoginScreen
			},
			HomeScreen: {
				 screen: HomeScreen
			},
			FollowersScreen: {
				 screen: Followers
			},
			FollowingScreen: {
				 screen: Following
			},
			PostChitScreen: {
				 screen: PostChit
			},
			SearchUserScreen: {
				 screen: SearchUser
			},
			UserDetailsScreen: {
				 screen: UserDetails
			},
			UpdateAccountDetails: {
				 screen: UpdateAccountDetails
			}
		});
		
		const AppContainer = createAppContainer(AppStackNav)
		
export default AppContainer;