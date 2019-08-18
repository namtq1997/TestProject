import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, StatusBar} from 'react-native';
import MainAppNavigator from './navigation/MainAppNavigator';

StatusBar.setHidden(true);

export default class MainApp extends Component {
    render (){
        return (
           <MainAppNavigator />
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
