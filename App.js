import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './component/home'
import CrossScreen from './component/cross'
import F2LScreen from './component/f2l'
import OLLScreen from './component/oll'
import PLLScreen from './component/pll'


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Cross: { screen: CrossScreen },
  F2L: { screen: F2LScreen },
  OLL: { screen: OLLScreen },
  PLL: { screen: PLLScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
