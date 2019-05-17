import React from 'react';
import {
	Button,
	SectionList,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Constants } from 'expo';
import contacts, { compareNames } from './contacts';

export default class App extends React.Component {
	state = {
		showContacts: false,
		contacts: contacts
	};

	// Add a new conctact
	addContact = newContact => {
		this.setState(prevState => ({
			showForm: false,
			contacts: [...this.state.contacts, newContact]
		}));
	};

	// item: {name: String, phone: String }
	// renderItem = obj => <Row {...obj.item} />;
	// renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} />

	render() {
		return; //something
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Constants.statusBarHeight
	}
});
