import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	row: {
		padding: 20
	}
});

const Row = props => (
	<View styles={styles.row}>
		<Text>{props.name}</Text>
		<Text>{props.phone}</Text>
	</View>
);

export default Row;
