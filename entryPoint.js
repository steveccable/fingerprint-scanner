
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App';

class FingerprintScanner extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('FingerprintScanner', () => FingerprintScanner);