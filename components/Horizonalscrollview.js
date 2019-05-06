import React, { PureComponent } from 'react'
import { Text, View ,ScrollView , Dimensions , Keyboard} from 'react-native'

export default class Horizonalscrollview extends PureComponent {
  render() {
    Keyboard.dismiss()  
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            // onMomentumScrollBegin={() => alert("A")}
            // onMomentumScrollEnd={() =>alert("a")}
            onScroll={(event) => {
                let logdata = `Scroll to x = ${event.nativeEvent.contentOffset.x} , y = ${event.nativeEvent.contentOffset.y}`;
                alert(logdata)
            }}
            scrollEventThrottle={10}
        >
            <View
                style={{
                    backgroundColor : "#5f9ea0",
                    flex : 1,
                    marginTop : 20,
                    width : width,
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                <Text
                    style={{fontSize : 20 , color : 'white' , textAlign : 'center'}}>
                        Screen 1
                </Text>
            </View>
            <View
                style={{
                    backgroundColor : "blue",
                    flex : 1,
                    marginTop : 20,
                    width : width,
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                <Text
                    style={{fontSize : 20 , color : 'white' , textAlign : 'center'}}>
                        Screen 1
                </Text>
            </View>
            <View
                style={{
                    backgroundColor : "green",
                    flex : 1,
                    marginTop : 20,
                    width : width,
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                <Text
                    style={{fontSize : 20 , color : 'white' , textAlign : 'center'}}>
                        Screen 1
                </Text>
            </View>
          
        </ScrollView>
    )
  }
}
