import React from 'react';
import { TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';

class AddContactForm extends React.Component {
	static propTypes = {
		addContact: PropTypes.func
	};

	state = {
		name: '',
		phone: ''
	};

	render() {
		return (
			<View>
				<TextInput value={this.state.name} />
				<TextInput value={this.state.phone} />
				<Button title="Add Contact" />
			</View>
		);
	}
}

export default AddContactForm;
