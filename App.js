/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import Stacknavigators from './components/navigation/Stacknavigators';
// import Word from './components/Word';
// import Flatlist from './components/Flatlist';


export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1 }}>
        <Stacknavigators/>

      </View>
    );
  }
}

