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

	// Toggle visibility of contacts
	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }));
	};

	// Sort contacts
	sort = () => {
		this.setState(prevState => ({
			contacts: [...prevState.contacts].sort(compareNames)
		}));
	};

	// item: {name: String, phone: String }
	// renderItem = obj => <Row {...obj.item} />;
	// renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} />
	renderItem = ({ item }) => <Row {...item} />;

	render() {
		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				<Button title="sort" onPress={this.sort} />
				{this.state.showContacts && (
					<FlatList
						renderItem={this.renderItem}
						data={this.state.contacts}
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
