import React from 'react';
import { SectionList } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';

const renderItem = ({ item }) => <Row {...item} />;

const ContactList = props => (
	<SectionList
		renderItem={props.renderItem}
		renderSectionHeader={props.renderSectionHeader}
		sections={[
			{
				title: 'A',
				data: props.contacts
			}
		]}
	/>
);

ContactList.propTypes = {
	renderItem: PropTypes.func,
	renderSectionHeader: PropTypes.func,
	contacts: PropTypes.array
};

export default ContactList;
