import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Chat extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const isInfo = state.params.mode === 'info';
    const { user } = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
        />
      ),
      headerLeft: <Text></Text>
    };
  };

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

