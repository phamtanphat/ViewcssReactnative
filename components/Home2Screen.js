import React, { Component } from 'react'
import { Text, View ,TouchableOpacity } from 'react-native'

export default class Home2Screen extends Component {
  render() {
    return (
      <View style={{flex :1 , justifyContent : 'center' , alignItems : 'center'}}>
        <TouchableOpacity
            onPress={() => this.props.navigation.push('Home3')}
        >
            <Text style={{fontSize : 30}}> Home Screen 2 </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
