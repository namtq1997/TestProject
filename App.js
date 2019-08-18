import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './scr/components/MainApp';

export default class App extends Component {
  
	render () {
		return (
			<MainApp />
		);
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
});
