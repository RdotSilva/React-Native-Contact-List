import React from 'react';
import {
	TextInput,
	View,
	Button,
	StyleSheet,
	KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'expo';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Constants.statusBarHeight,
		justifyContent: 'center'
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		minWidth: 100,
		marginTop: 20,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 3
	}
});

export default class AddContactForm extends React.Component {
	static propTypes = {
		addContact: PropTypes.func
	};

	state = {
		name: '',
		phone: '',
		isFormValid: false
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			this.state.name !== prevState.name ||
			this.state.phone !== prevState.phone
		) {
			this.validateForm();
		}
	}

	handleNameChange = name => {
		this.setState({ name });
	};

	handlePhoneChange = phone => {
		if (+phone >= 0 && phone.length <= 10) {
			this.setState({ phone });
		}
	};

	validateForm = () => {
		if (
			+this.state.phone >= 0 &&
			this.state.phone.length === 10 &&
			this.state.name.length >= 3
		) {
			return this.setState({ isFormValid: true });
		} else {
			return this.setState({ isformValid: false });
		}
	};

	handleSubmit = () => {
		this.props.onSubmit(this.state);
	};

	render() {
		return (
			<KeyboardAvoidingView style={{ paddingTop: 20 }}>
				<TextInput
					style={styles.input}
					onChangeText={this.handleNameChange}
					value={this.state.name}
					placeholder="Name"
				/>
				<TextInput
					style={styles.input}
					onChangeText={this.handlePhoneChange}
					value={this.state.phone}
					placeholder="Phone"
					keyboardType="numeric"
				/>
				<Button
					title="Add Contact"
					onPress={this.handleSubmit}
					disabled={!this.state.isFormValid}
				/>
			</KeyboardAvoidingView>
		);
	}
}
