import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Account'})
      ]
    })
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          Welcome to the login screen
        </Text>
        <Button title={'login'} onPress={this.login}/>
      </View>
    );
  }
}

export default Login;