import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Main from './screens/Main'
import AppStackNavigator from './AppStackNavigator'

export default class LogIn extends React.Component {

    componentDidMount () {
        console.log('test')
      }   

  render() {
    return (
        <View style={styles.container}>
            <TextInput
             placeholder="username"
             style={styles.input}
            >
            </TextInput>
            <TextInput
             placeholder="password"
             secureTextEntry
             style={styles.input}
            >
            </TextInput>

            <TouchableOpacity style={styles.bottonContainer} onPress={() => this.props.navigation.navigate('Authentication', { isAuthorized: true })}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    bottonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})