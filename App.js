import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import F2LScreen from './component/f2l'
import CrossScreen from './component/cross'
import OLLScreen from './component/oll'
import PLLScreen from './component/pll'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Rubik-cfop'
  };
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
      <Button
        title = "Cross"
        onPress = {()=>
          navigate('Cross')
        }
      />
      <Button
        title = "F2L"
        onPress = {()=>
          navigate('F2L')
        }
      />
      <Button
        title = "OLL"
        onPress = {()=>
          navigate('OLL')
        }
      />
      <Button
        title = "PLL"
        onPress = {()=>
          navigate('PLL')
        }
      />
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
  }
});
