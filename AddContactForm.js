import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

class AddContactForm extends React.Component {
	static propTypes = {
		addContact: PropTypes.func
	};
	render() {
		return (
			<View>
				<TextInput />
				<TextInput />
				<Button title="Add Contact" />
			</View>
		);
	}
}

export default AddContactForm;
