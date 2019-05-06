import React, { Component } from 'react'
import { Text, View , TouchableOpacity , Image} from 'react-native'

export default class Touchable extends Component {
  render() {
    return (
      <View >
        <TouchableOpacity
            onPress={() => console.log("aa")}>
            <Text>
                Button
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
