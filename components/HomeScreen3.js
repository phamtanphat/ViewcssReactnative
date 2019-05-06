import React, { Component } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class HomeScreen3 extends Component {
  render() {
    return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
            <TouchableOpacity
               
            >
                <Text style={{fontSize : 30}}> Home Screen 3 </Text>
            </TouchableOpacity>
      </View>
    )
  }
}
