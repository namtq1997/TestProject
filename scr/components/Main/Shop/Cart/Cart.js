import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Cart extends Component{
    render (){
        return (
            <View style={{flex: 1, backgroundColor: '#99ff70'}}>
                <Text> Cart Component </Text>
            </View> 
        )
    }
}