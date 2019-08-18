import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
const {height}= Dimensions.get('window');

export default class Collection extends Component{
    render() {
        const {wrapper} = styles;
        return(
            <View style= {wrapper}>
                <Text>acsc</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    wrapper: {
        height: height/3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset:{
            width: 0,
            height: 3
        },
        shadowOpacity: 0.2
    }
});