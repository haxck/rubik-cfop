import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Alert, PixelRatio, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import F2LScreen from './component/f2l'
import CrossScreen from './component/cross'
import OLLScreen from './component/oll'
import PLLScreen from './component/pll'

class HomeScreen extends React.Component {
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
    const {navigate} = this.props.navigation
    return (
      <View style = { styles.container }>
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
          <Text style={styles.buttonText}>PLLScreen</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
        <View style={styles.btn}>
          <Text style={styles.buttonText}>Test Button</Text>
        </View>
      </TouchableHighlight>
      </View>
    )
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Cross: { screen: CrossScreen},
  F2L: { screen: F2LScreen},
  OLL: { screen: OLLScreen},
  PLL: { screen: PLLScreen},
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
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
