import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Screen2 extends PureComponent {
  static navigationOptions = {
    title: 'Screen2',
  };
  render() {
    return (
      <View>
        <Text> Screen2 </Text>
      </View>
    )
  }
}
