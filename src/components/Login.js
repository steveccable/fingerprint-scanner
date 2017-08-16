import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.attemptLogin = this.attemptLogin.bind(this);
    this.state = {
      username: undefined,
      password: undefined
    };
  }

  attemptLogin() {
    const { hasLoggedInManually } = this.props;
    if (hasLoggedInManually) {
      this.props.loginWithFinger(this.props.firebaseApp);
    } else {
      this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(() => {
          this.props.loginManually({ username: this.state.username, password: this.state.password });
        }).catch((error) => {
          Alert.alert('Login Failed', error.message);
        });
    }
  }

  render() {
    const { hasLoggedInManually } = this.props;
    let contents;
    if (hasLoggedInManually) {
      contents = (
        <Text>Tap 'Login' to scan fingerprint</Text>
      );
    } else {
      contents = (
        <View>
          <TextInput
            value={this.state.username}
            placeholder={'username'}
            onChangeText={(text) => this.setState({ username: text })}
            style={{height: 40}}
          />
          <TextInput
            value={this.state.password}
            placeholder={'password'}
            onChangeText={(text) => this.setState({ password: text })}
            style={{height: 40}}
          />
        </View>
      );
    }
    return (
      <View>
        <Text>
          Welcome to the login screen
        </Text>
        {contents}
        <Button title={'login'} onPress={this.attemptLogin}/>
      </View>
    );
  }
}

export default Login;
