import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';

const renderItem = ({ item }) => <Row {...item} />;

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>;

const ContactList = props => {
	const contactsByLetter = props.contacts.reduce((obj, contact) => {
		const firstLetter = contact.name[0].toUpperCase();
		return {
			...obj,
			[firstLetter]: [...(obj[firstLetter] || []), contact]
		};
	}, {});

	return (
		<SectionList
			renderItem={renderItem}
			renderSectionHeader={renderSectionHeader}
			sections={[
				{
					title: 'A',
					data: props.contacts
				}
			]}
		/>
	);
};

ContactList.propTypes = {
	renderItem: PropTypes.func,
	renderSectionHeader: PropTypes.func,
	contacts: PropTypes.array
};

export default ContactList;
