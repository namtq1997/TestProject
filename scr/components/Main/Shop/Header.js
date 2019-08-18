import React, {Component} from 'react';
import { StyleSheet ,View, Text, Dimensions } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const {height}= Dimensions.get('window');

class Header extends Component {
    render() {
        return (
            <View style={styles.topBar}>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Ionicons name="md-menu" size={35} color='white'/>
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Find Your Building</Text>
                    <FontAwesome name= "building" size={28} color='white'/>
                </View>
                <TextInput style={styles.textInput}
                           placeholder= 'What do you want to buy?'
                />
            </View>
        );
    }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
    topBar: {
        height: height/8,  
        backgroundColor: '#265219',
        padding: 10,
        justifyContent: "space-around",
    },
    row1: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    titleStyle: {
        color: '#FFF',
        fontSize: 20
    },
    textInput: {
        height:height/20, 
        backgroundColor:'#FFF'
    }
})