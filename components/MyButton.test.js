import MyButton from './MyButton';
import renderer from 'react-test-renderer';
import React from 'react';

describe('MyButton', () => {
	it('renders', () => {
		const button = renderer.create(<MyButton />).toJSON();
		expect(button).toMatchSnapshot();
	});
	it('correctly overrides default color', () => {
		const color = 'red';
		const button = getUnderlyingButton(
			renderer.create(<MyButton color={color} />)
		);
		expect(button.props.color).toBe(color);
	});
});
