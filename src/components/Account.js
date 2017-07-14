import React from 'react';
import { Button, Text, View } from 'react-native';

class Account extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to the account screen. YAY!!!
        </Text>
        <Button title={'logout'} onPress={this.props.logout}/>
      </View>
    );
  }
}

export default Account;