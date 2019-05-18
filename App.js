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
import { createStackNavigator } from 'react-navigation';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';

const AppNavigator = createStackNavigator(
	{
		AddContact: AddContactScreen,
		ContactList: ContactListScreen,
		ContactDetails: ContactDetailsScreen
	},
	{
		initialRouteName: 'ContactList'
	}
);

export default class App extends React.Component {
	state = {
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
		return (
			<AppNavigator
				screenProps={{
					contacts: this.state.contacts,
					addContact: this.addContact
				}}
			/>
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
