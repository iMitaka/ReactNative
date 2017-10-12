import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Main from './screens/Main'
import LogIn from './LogIn'
import Authentication from './Authentication'

const AppStackNavigator = StackNavigator({
  Authentication: {
    screen: Authentication
  },
  LogIn: {
    screen: LogIn
  },
  Main: {
    screen: Main
  },
},
{
  navigationOptions: {
    header: null,
  },
});

export default AppStackNavigator

