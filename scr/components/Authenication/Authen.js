import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Authen extends Component {
    render (){
        const {
            navigation: {goBack},
        } = this.props;
        return (
            <View style={styles.container}> 
                <Text>Authen</Text>
                <TouchableOpacity onPress={() => goBack()}>
                    <Text>Back to Main</Text>
                </TouchableOpacity>
            </View>
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