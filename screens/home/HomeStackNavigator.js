import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeTabNavigator from './HomeTabNavigator'
import Chat from './components/Chat'

const HomeStackNavigator = StackNavigator({
  Home: {
    screen: HomeTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Chat: {
    screen: Chat
  }
});

export default HomeStackNavigator


