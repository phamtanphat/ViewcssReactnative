import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Screen1 : {screen : Screen1},
  Screen2 : {screen : Screen2},
});

export default createAppContainer(AppNavigator);