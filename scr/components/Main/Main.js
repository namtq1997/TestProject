import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import DrawerNavigator from '../navigation/DrawerNavigator'

export default class Main extends Component {
    render (){
        // const {
        //     navigation: { navigate },
        // } = this.props;
        return (
            <DrawerNavigator />
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
    },
})