import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';



export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Rubik-cfop'
    };

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => navigate('Cross')} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.btn}>
                        <Text style={styles.buttonText}>Cross</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('F2L')} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.btn}>
                        <Text style={styles.buttonText}>F2L</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('OLL')} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.btn}>
                        <Text style={styles.buttonText}>OLL</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('PLL')} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.btn}>
                        <Text style={styles.buttonText}>PLL</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        marginBottom: 30,
        width: 240,
        borderRadius: 240,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
    }
});