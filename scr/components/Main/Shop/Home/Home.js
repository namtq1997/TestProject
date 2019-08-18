import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'
import Collection from './Collection';

class Home extends Component{
    render (){
        return (
            <View style={{flex:1,backgroundColor: '#d1c7c7'}}>
                <Collection />
            </View> 
        )
    }
}
export default withNavigation(Home);