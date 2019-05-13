import React from 'react';
import { SectionList } from 'react-native';
import PropTypes from 'prop-types';

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

export default ContactList;
