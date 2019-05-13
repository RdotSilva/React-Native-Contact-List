import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import contacts from './contacts';

const Row = props => (
	<View key={props.key}>
		<Text>{props.name}</Text>
		<Text>{props.phone}</Text>
	</View>
);

export default class App extends React.Component {
	state = {
		showContacts: false
	};

	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

	render() {
		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				<ScrollView>
					{contacts.map(contact => (
						
					))}
				</ScrollView>
			</View>
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
