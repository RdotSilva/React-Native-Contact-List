import * as actions from './actions';

describe('updateUser returns actions', () => {
	it('returns an action', () => {
		expect(actions.updateUser({ name: 'test name' })).toMatchSnapshot();
	});

	it('handles empty object', () => {
		expect(actions.updateUser({})).toMatchSnapshot();
	});

	it('handles emptyy name', () => {
		expect(actions.updateUser({ name: '' })).toMatchSnapshot();
	});
});
