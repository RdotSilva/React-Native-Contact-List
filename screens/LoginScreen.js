import React from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {
	state = {
		username: '',
		password: ''
	};
	_login = () => {
		this.props.navigation.navigate('Main');
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="username"
					value={this.state.username}
					onChangeText={this.handleUsernameUpdate}
				/>
				<TextInput placeholder="password" />
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
