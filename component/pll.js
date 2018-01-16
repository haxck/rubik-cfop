import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class F2LScreen extends React.Component {
    static navigationOptions = {
        title: 'PLLScreen'
    };
    render() {
        const {navigate} = this.props.navigation
        return (
        <Text>This is PLLScreen</Text>
        )
    }
}