import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Menu extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Text>Menu Component</Text>
            </View>
        );
    }
}

export default Menu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
    },
})