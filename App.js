import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Main from './screens/Main'
import AppStackNavigator from './AppStackNavigator'

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}
