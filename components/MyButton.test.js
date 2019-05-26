import MyButton from './MyButton';
import renderer from 'react-test-renderer';

describe('MyButton', () => {
	it('renders', () => {
		const button = renderer.create(<MyButton />).toJSON();
		expect(button).toMatchSnapshot();
	});
});