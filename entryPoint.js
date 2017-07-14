
import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './src/containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/reducers';

class FingerprintScanner extends React.Component {
  render() {
    const store = createStore(reducers, {});
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FingerprintScanner', () => FingerprintScanner);