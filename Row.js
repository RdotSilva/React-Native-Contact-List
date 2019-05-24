import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	row: { padding: 20 }
});

class Row extends React.PureComponent {
	render() {
		const { props } = this;
		return (
			<View style={styles.row}>
				<Text>{props.name}</Text>
				<Text>{props.phone}</Text>
			</View>
		);
	}
}

Row.propTypes = {
	name: PropTypes.string,
	phone: PropTypes.string
};

export default Row;
