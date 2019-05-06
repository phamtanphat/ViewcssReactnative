import React, { PureComponent } from 'react'
import { Text, View , FlatList} from 'react-native'
import axios from 'axios';
import Word from './Word';

export default class Flatlist extends PureComponent {
    state = {
        words : []
    }
    async componentWillMount(){
        try {
            let response = await axios.get('https://server2301.herokuapp.com/word')
            this.setState({words : response.data.words});
        } catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (
        <View>
            <FlatList
                data={this.state.words}
                extraData={this.state.words}
                keyExtractor={(item) => item._id} 
                renderItem={ ({item,index}) =>{
                    return (
                        <Word 
                            key={index}
                            word={item}>
                        </Word>)
                }}
            >

            </FlatList>
        </View>
        )
    }
}
