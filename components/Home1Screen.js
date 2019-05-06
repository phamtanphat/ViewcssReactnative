import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'

export default class Home1Screen extends Component {
  render() {
    return (
      <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home2')}
        >
            <Text style={{fontSize : 30}}> Home Screen 1 </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
