/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import LoginContainer from '../containers/LoginContainer';
import AccountContainer from '../containers/AccountContainer';

class App extends React.Component {
  render() {
    const contents = this.props.authed.credentials ? <AccountContainer /> : <LoginContainer firebaseApp={this.props.firebaseApp} />;
    return (
      <View style={{marginTop: 40}}>
        {contents}
      </View>
    );
  }
}

export default App;