import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Second from '../screens/second'

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Wallpapers'
		}
	},
	Second: {
		screen : Second,
		navigationOptions: {
			title: 'Wallpapers 2'
		}
	}
}

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: { backgroundColor: 'green', height: 60}
	}
});

export default createAppContainer(HomeStack);
