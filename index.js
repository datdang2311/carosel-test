/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {registerScreens} from './app/containers';
import {Navigation} from 'react-native-navigation';
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
              options: {
                layout: {
                  orientation: ['portrait'],
                },
                topBar: {
                  height: 0,
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
