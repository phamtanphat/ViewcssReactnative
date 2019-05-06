import React, { Component } from 'react'
import { Text, View , TextInput , Keyboard} from 'react-native'

export default class Textinput extends Component {
  render() {
    return (
      <View style={{flex : 1 , justifyContent : 'center'}}>
          <TextInput
            style={{borderRadius : 10 , borderWidth : 3 }}
            returnKeyType="search"
            placeholder="Nhập giá trị"
          >
              
          </TextInput>
      </View>
    )
  }
}
