import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import AppSideNav from './components/AppSideNav';
import Home from './home/Home'
import Authentication from '../Authentication'

const drawer = DrawerNavigator({
  Home: {
    screen: Home
  },
  LogOut: {
    screen: Authentication,
    props: { isAuthorized: false },
  }
}, {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => (
      <AppSideNav {...props} />
    ),
    drawerBackgroundColor: 'transparent'
  })

export default drawer
