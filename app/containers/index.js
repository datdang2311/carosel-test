import {AppRegistry} from 'react-native';
import HomeScreen from './Home/HomeScreen';
export function registerScreens() {
  AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
}
