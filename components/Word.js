import React, { PureComponent } from 'react'
import { Text, View ,TouchableOpacity } from 'react-native'

export default class Word extends PureComponent {
    render() {
        const word = this.props.word;
        return (
        <View style={{flex : 1}}>
            <View style={{flex : 1 , backgroundColor : '#F0F0F0' , justifyContent : 'center' , marginTop : 10}}>
                <View style={{flex : 50 ,flexDirection : 'row' , justifyContent : 'space-around' , marginTop : 10}}>
                    <Text 
                        style={{fontSize : 35 , color : 'green' , paddingBottom: 10}}>
                        {word.en}
                    </Text>
                    <Text 
                        style={{fontSize : 35 , color : 'red', paddingBottom : 10}}>
                        {word.isMemorized ? word.vn : '----'}
                    </Text>
                </View>
                <View style={{flex : 50 ,flexDirection : 'row' , justifyContent : 'space-around' , marginBottom : 10}}>
                    <TouchableOpacity
                        style={{backgroundColor : word.isMemorized ? 'green' : 'red' , paddingHorizontal : 20 , paddingVertical : 15 , borderRadius : 5}}
                    >
                        <Text style={{color : 'white' , fontWeight : 'bold'}}>Forgot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor : '#E0A800' , paddingHorizontal : 20 , paddingVertical : 15 , borderRadius : 5}}>
                        <Text style={{color : 'white' , fontWeight : 'bold'}}>
                        Remove
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}
