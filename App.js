import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import contacts from './contacts';

export default class App extends React.Component {
	state = {
		showContacts: false
	};

	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
