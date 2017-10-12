import React from 'react';
import { DrawerItems } from 'react-navigation';
import { ScrollView, Text } from 'react-native';

export default class AppSideNav extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text>HELOOOOOO</Text>
                <DrawerItems {...this.props} />
            </ScrollView>
        );
    }
}