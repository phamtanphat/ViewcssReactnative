import React, { Component } from 'react'
import { Text, View  , Alert} from 'react-native'
import Button from 'react-native-button';
export default class Buttonreact extends Component {
  render() {
    return (
      <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
       <Button
          style={{fontSize : 20 , color : 'white' , backgroundColor : 'green' , padding : 15 , borderRadius : 10}}
       >
            This is a button
       </Button>
      </View>
    )
  }
}
