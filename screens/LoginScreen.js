import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-type';

import { logInUser } from '../redux/actions';
import { login } from '../api';

class LoginScreen extends React.Component {
	static propTypes = {
		err: PropTypes.string,
		token: PropTypes.string,
		logInUser: PropTypes.func
	};

	state = {
		username: '',
		password: ''
	};

	_login = async () => {
		try {
			this.props.logInUser(this.state.username, this.state.password);
			this.props.navigation.navigate('Main');
		} catch (err) {
			const errMessage = err.message;
			this.setState({ err: errMessage });
		}
	};

	handleUsernameUpdate = username => {
		this.setState({ username });
	};

	handlePasswordUpdate = password => {
		this.setState({ password });
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.error}>{this.state.err}</Text>
				<TextInput
					placeholder="username"
					value={this.state.username}
					onChangeText={this.handleUsernameUpdate}
					autoCapitalize="none"
				/>
				<TextInput
					placeholder="password"
					value={this.state.password}
					onChangeText={this.handlePasswordUpdate}
					secureTextEntry
				/>
				<Button title="Press to Log In" onPress={this._login} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1
	},
	text: {
		textAlign: 'center'
	},
	error: {
		textAlign: 'center',
		color: 'red'
	}
});

const mapStateToProps = state => ({
	err: state.user.loginErr,
	token: state.user.token
});

export default connect(
	mapStateToProps,
	{ logInUser }
)(LoginScreen);
