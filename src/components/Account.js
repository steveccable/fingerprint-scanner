import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login'})
      ]
    })
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to the account screen. YAY!!!
        </Text>
        <Button title={'logout'} onPress={this.logout}/>
      </View>
    );
  }
}

export default Account;