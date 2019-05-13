import React from 'react';
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Constants } from 'expo';
import contacts, { compareNames } from './contacts';
import Row from './Row';

export default class App extends React.Component {
	state = {
		showContacts: false,
		contacts: contacts
	};

	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

	sort = () => {
		this.setState(prevState => ({
			contacts: prevState.contacts.sort(compareNames)
		}));
	};

	renderItem = obj => <Row {...obj.item} />;

	render() {
		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				{this.state.showContacts && (
					<FlatList
						renderItem={obj => <Row {...obj.item} />}
						data={contacts}
					/>
				)}
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
