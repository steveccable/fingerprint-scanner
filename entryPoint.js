
import React from 'react';
import { AppRegistry, AsyncStorage, Text } from 'react-native';
import AppContainer from './src/containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/reducers';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDBbwYoGpxLOCs1BGilPlTcbSf4z1Ker9k',
  authDomain: 'fingerprintscanner-2bcb9.firebaseapp.com',
  databaseURL: 'https://fingerprintscanner-2bcb9.firebaseio.com',
  projectId: 'fingerprintscanner-2bcb9',
  storageBucket: 'fingerprintscanner-2bcb9.appspot.com',
  messagingSenderId: '495343748985'
};

const firebaseApp = firebase.initializeApp(config);

let store = null;

class FingerprintScanner extends React.Component {
  async getStoredCredentials() {
    const credentials = await AsyncStorage.getItem('userCredentials');
    store = createStore(reducers, { auth: { hasLoggedInManually: !!credentials }, firebaseApp });
    this.forceUpdate();
  }

  componentWillMount() {
    this.getStoredCredentials();
  }

  render() {
    // const store = createStore(reducers, {});
    return store ? (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    ) : (
      <Text>Store not yet initialized.  You shouldn't see me.</Text>
    );
  }
}

AppRegistry.registerComponent('FingerprintScanner', () => FingerprintScanner);