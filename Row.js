import React from 'react';
import { View, Row, Text } from 'react-native';

const Row = props => (
	<View>
		<Text>{props.name}</Text>
		<Text>{props.phone}</Text>
	</View>
);

export default Row;
