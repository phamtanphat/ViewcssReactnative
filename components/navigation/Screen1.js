import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class Screen1 extends PureComponent {
  static navigationOptions = {
    title: 'Screen1',
  };
  toprender(){
    return(
      <View style={{flex : 20 , flexDirection : 'row' , alignItems : 'flex-start' , justifyContent : 'space-between'}}>
          <View style={{backgroundColor : 'red' }}>
            <Text style={{color : 'white' , fontSize : 30 }}>One</Text>
          </View>
          <View style={{backgroundColor : 'blue'  }}>
            <Text style={{color : 'white' , fontSize : 30 }}>Two</Text>
          </View>
      </View>
    )
  }
  bottomRender(){
    return(
      <View style={{flex : 20 , flexDirection : 'row' , alignItems : 'flex-end' , justifyContent : 'space-between'}}>
          <View style={{backgroundColor : 'yellow' }}>
            <Text style={{color : 'white' , fontSize : 30 }}>Three</Text>
          </View>
          <View style={{backgroundColor : 'orange'  }}>
            <Text style={{color : 'white' , fontSize : 30 }}>Four</Text>
          </View>
      </View> 
    )
  }
  centerRender(){
    return(
      <View style={{flex : 60 , flexDirection : 'row' , justifyContent : 'center'}}>
          <View style={{flexDirection : 'column' , justifyContent : 'space-evenly'}}>
            <View style={{backgroundColor : 'red' }}>
              <Text style={{color : 'white' , fontSize : 30 , padding : 10}}>Five</Text>
            </View>
            <View style={{backgroundColor : 'blue'  }}>
              <Text style={{color : 'white' , fontSize : 30 , padding : 10}}>Six</Text>
            </View>
          </View>
          <View style={{justifyContent :'center', alignItems : 'center'}}>
            <View style={{backgroundColor : 'gray' }}>
              <Text style={{color : 'white' , fontSize : 30 , padding : 10}}>Seven</Text>
            </View>
          </View>
          <View style={{flexDirection : 'column' , justifyContent : 'space-evenly' }}>
            <View style={{backgroundColor : 'red' }}>
              <Text style={{color : 'white' , fontSize : 30, padding : 10}}>Eight</Text>
            </View>
            <View style={{backgroundColor : 'blue'  }}>
              <Text style={{color : 'white' , fontSize : 30 , padding : 10}}>Nine</Text>
            </View>
          </View>
      </View>   
    )
  }
  render() {
    return (
      <View style={{flex : 1}}>
        {this.toprender()}
        {this.centerRender()}
        {this.bottomRender()}
      </View>
    )
  }
}
