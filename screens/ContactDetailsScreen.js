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
		const { contacts } = this.props.screenProps;
		const phone = this.props.navigation.getParam('phone');
		let randomContact;
		while (!randomContact) {
			const randomIndex = Math.floor(Math.random() * contacts.length);
			if (contacts[randomIndex].phone !== phone) {
				randomContact = contacts[randomIndex];
			}
		}
		this.props.navigation.navigate('ContactDetails', {
			name: randomContact.name,
			phone: randomContact.phone
		});
	};
}
