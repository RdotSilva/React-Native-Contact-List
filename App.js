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
import {
	createStackNavigator,
	createSwitchNavigator,
	createTabNavigator
} from 'react-navigation';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';

const ContactsTab = createStackNavigator(
	{
		AddContact: AddContactScreen,
		ContactList: ContactListScreen,
		ContactDetails: ContactDetailsScreen
	},
	{
		initialRouteName: 'ContactList',
		navigationOptions: {
			headerTintColor: '#a41034'
		}
	}
);

const MainNavigator = createTabNavigator(
	{
		Contacts: ContactsTab,
		Settings: SettingsScreen
	},
	{
		tabBarOptions: {
			activeTintColor: '#a40134'
		}
	}
);

const AppNavigator = createSwitchNavigator(
	{
		Main: MainNavigator,
		Login: LoginScreen
	},
	{
		initialRouteName: 'Login'
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
