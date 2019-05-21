import React from 'react';
import AddContactForm from '../AddContactForm';
import store from '../redux/store';
import { addContact } from '../redux/actions';

export default class AddContactScreen extends React.Component {
	static navigationOptions = {
		headerTitle: 'New Contact'
	};

	handleSubmit = formState => {
		store.dispatch(
			addContact({ name: formState.name, phone: formState.phone })
		);
		this.props.navigation.navigate('ContactList');
	};

	render() {
		return <AddContactForm onSubmit={this.handleSubmit} />;
	}
}
