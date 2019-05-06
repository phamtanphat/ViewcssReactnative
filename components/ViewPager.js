import React, { PureComponent } from 'react'
import { Text, View , ViewPagerAndroid , SafeAreaView } from 'react-native'
console.disableYellowBox = true;

export default class ViewPager extends PureComponent {
  render() {
    return (
        <SafeAreaView style={{flex : 1}}>
            <ViewPagerAndroid
            style={{flex : 1}}
            onPageScroll={evt => {
                alert(`offset + ${evt.nativeEvent.offset}`);
            }}
            initialPage={2}>
            <View style={{backgroundColor : 'lightseagreen'}}>
                <Text>Screen 1</Text>
            </View>
            <View style={{backgroundColor : 'darkblue'}}>
                <Text>Screen 1</Text>
            </View>
            <View style={{backgroundColor : 'deeppink'}}>
                <Text>Screen 1</Text>
            </View>
            </ViewPagerAndroid>
        </SafeAreaView>
        
    )
  }
}
