import React, { Component } from 'react'
import { Text, View , Platform , Dimensions , Image , TextInput , ScrollView} from 'react-native'

export default class ScrollViewVertical extends Component {
  render() {
    const width = Dimensions.get('window').width 
    return (
      <View>
        <ScrollView
            maximumZoomScale={4}
            minimumZoomScale={0.1}
            keyboardDismissMode="on-drag"
            contentContainerStyle={{paddingLeft : 10}}
        >
            <Image
                style={{width , height : width* 1080 /1920}}
                source={{uri : 'https://i.pinimg.com/originals/85/e5/e5/85e5e5ed3ad87c8191d5ce7ebf03399c.jpg'}}
            >
            </Image>
            <TextInput
                style={{flex : 1 , justifyContent : 'center' , alignItems : 'stretch' , borderWidth : 5 , borderColor : 'red'}}
            >

            </TextInput>
        </ScrollView>
      </View>
    )
  }
}
