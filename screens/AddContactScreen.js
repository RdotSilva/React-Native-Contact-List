import React from 'react';
import AddContactForm from '../AddContactForm';

export default class AddContactScreen extends React.Component {
	static navigationOptions = {
		headerTitle: 'New Contact'
	};

	render() {
		return <AddContactForm onSubmit={this.handleSubmit} />;
	}
}
