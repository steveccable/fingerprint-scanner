/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Account from './Account';

const App = StackNavigator({
  Login: { screen: Login },
  Account: { screen: Account }
});

export default App;