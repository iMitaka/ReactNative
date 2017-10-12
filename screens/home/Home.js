import React from 'react';
import HomeStackNavigator from './HomeStackNavigator'

export default class Home extends React.Component {

    componentDidMount() {
        this.props.navigation.dispatch('LogIn');
    }

    render() {
        return (<HomeStackNavigator />);
    }
}