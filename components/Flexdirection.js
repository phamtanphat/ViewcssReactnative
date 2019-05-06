import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Flexdirection extends Component {
  render() {
    return (
      <View style={{flex : 1 }}>
        <View style={{flex : 10 ,flexDirection : 'row',  justifyContent : 'space-between' , alignItems : 'flex-start'}}>
            <Text style={{backgroundColor : 'lightseagreen' , fontSize : 30}}>
                View 1
            </Text>
            <Text style={{backgroundColor : 'lightskyblue' , fontSize : 30}}>
                View 2
            </Text>
        </View>
        <View style={{flex : 80 , flexDirection : 'column'}}>
            <View style={{flex : 35 , flexDirection : 'row' , justifyContent : 'space-around' , alignItems : 'flex-end'}}>
                <Text style={{backgroundColor : 'lightseagreen' , fontSize : 30}}>
                    View 3
                </Text>
                <Text style={{backgroundColor : 'lightskyblue' , fontSize : 30}}>
                    View 4
                </Text>
            </View>
            <View style={{flex : 10 , justifyContent : 'center' , alignItems : 'center'}}>
                <Text style={{backgroundColor : 'lime' , fontSize : 30}}>
                    View 5
                </Text>
            </View>
            <View style={{flex : 35 , flexDirection : 'row' , justifyContent : 'space-around' , alignItems : 'flex-start'}}>
                <Text style={{backgroundColor : 'linen', fontSize : 30}}>
                    View 6
                </Text>
                <Text style={{backgroundColor : 'magenta', fontSize : 30}}>
                    View 7
                </Text>
            </View>
            <View style={{flex : 10 ,flexDirection : 'row',  justifyContent : 'space-between' , alignItems : 'flex-end'}}>
                <Text style={{backgroundColor : 'lightseagreen' , fontSize : 30}}>
                    View 8
                </Text>
                <Text style={{backgroundColor : 'lightskyblue' , fontSize : 30}}>
                    View 9
                </Text>
            </View>
            
            
           
        </View>
          
      </View>
    )
  }
}

{/* <View style={{flex : 1 , flexDirection : 'column'}}>
        <View style={{flex : 10 , alignItems : 'center'}}>
            <Text style={{color : 'white' , backgroundColor : 'lightseagreen' , fontSize : 30 }}>
                    Top Content Here
            </Text>
        </View>
        <View style={{flex : 80 , flexDirection : 'row' , justifyContent : 'space-around' , alignItems : 'center'}}>
            <Text style={{color : 'white' , backgroundColor : 'lightgreen' , fontSize : 30  }}>
                    First
            </View>
            <Text style={{color : 'white' , backgroundColor : 'lightgrey' , fontSize : 30 }}>
                    Second
            </Text>
            <Text style={{color : 'white' , backgroundColor : 'lightpink' , fontSize : 30 }}>
                    Three
            </Text>
        </View>
        <View style={{flex : 10 ,justifyContent : 'flex-end', alignItems : 'center'}}>
            <Text style={{color : 'white' , backgroundColor : 'lightsalmon' , fontSize : 30 }}>
                    Botton Content Here
            </Text>
        </View>       
      </View> */}