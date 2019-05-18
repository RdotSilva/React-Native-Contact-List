import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class ContactDetailsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: navigation.getParm('name')
	});
	render() {
		return (
			<View>
				<Text>{this.props.navigation.getParam('phone')}</Text>
				<Button title="Go to contact" />
			</View>
		);
	}

	_goToRandom = () => {
		// todo
	};
}
