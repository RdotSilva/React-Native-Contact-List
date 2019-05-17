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
import Row from './Row';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';

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

	// Toggle visibility of contacts
	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

	// Toggle visibility of form
	toggleForm = () => {
		this.setState(prevState => ({ showForm: !prevState.showForm }));
	};

	// Sort contacts
	sort = () => {
		this.setState(prevState => ({
			contacts: [...prevState.contacts].sort(compareNames)
		}));
	};

	// item: {name: String, phone: String }
	// renderItem = obj => <Row {...obj.item} />;
	// renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} />

	render() {
		if (this.state.showForm) return;
		return (
			<View style={styles.container}>
				<Button title="Toggle Contacts" onPress={this.toggleContacts} />
				<Button title="Add Contact" onPress={this.toggleForm} />
				{this.state.showContacts && (
					<ContactList contacts={this.state.contacts} />
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Constants.statusBarHeight
	}
});
