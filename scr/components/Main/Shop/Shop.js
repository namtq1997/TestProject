import React, {Component} from 'react';
import { StyleSheet ,View, Text, Dimensions } from 'react-native';
import TabNavigator from '../../navigation/TabNavigator';
import Header from './Header'
const {height}= Dimensions.get('window');

class Shop extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header style= {{flex:1}} />
                <TabNavigator />
            </View>
        );
    }
}

export default Shop;

