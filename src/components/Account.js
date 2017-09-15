import React from 'react';
import { Button, Text, View } from 'react-native';
import * as Firebase from 'firebase';

// Component representing a user's bank account
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.tasksRef = props.firebaseApp.database().ref();
    // const dataSource = new ListView.DataSource({
    //   rowHasChanged: (row1, row2) => row1 !== row2,
    // });
    this.state = {
      dataSource: []
    };
  }

  listenForTasks(tasksRef) {
    tasksRef.on('value', (dataSnapshot) => {
      var tasks = [];
      dataSnapshot.forEach((child) => {
        tasks.push(JSON.stringify({
          name: child.val().title,
          _key: child.key
        }));
      });

      this.setState({
        dataSource: tasks
      });
    });
  }

  componentWillMount() {
    this.listenForTasks(this.tasksRef);
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.dataSource.toString()}
        </Text>
        <Button title={'logout'} onPress={this.props.logout}/>
      </View>
    );
  }
}

export default Account;