/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const RrnRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RrnRedux);
