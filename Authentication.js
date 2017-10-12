import React from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, StatusBar } from 'react-native';

export default class Authentication extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
    setTimeout(() => this.checkForAuthorization(), 2000);
  }

  checkForAuthorization() {
    if (this.props.isAuthorized ||
      (this.props.navigation.state.params && this.props.navigation.state.params.isAuthorized)) {
      this.navigateTo('Main')
    } else {
      this.navigateTo('LogIn')
    }
  }


  navigateTo = (routeName) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}
