import React from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {
	state = {
		username: '',
		password: ''
	};

	_login = async () => {
		const response = await fetch('http://localhost:8000', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		});

		if (response.ok) {
			this.props.navigation.navigate('Main');
			return;
		}

		const errMessage = await response.text();
		this.setState({ err: errMessage });
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
				/>
				<TextInput
					placeholder="password"
					value={this.state.password}
					onChangeText={this.handlePasswordUpdate}
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
	}
});
