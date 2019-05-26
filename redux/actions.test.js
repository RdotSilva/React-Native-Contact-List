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

describe('loginUser returns actions', () => {
	it('dispatches LOG_IN_SENT', async () => {
		const mockDispatch = jest.fn();
		await actions.logInUser('', '')(mockDispatch);
		// mockDispatch.mock.calls all the args that the mock fn was invoked on
		expect(mockDispatch.mock.calls[0][0]).toEqual({
			type: actions.LOG_IN_SENT
		});
	});
	it('dispatches LOG_IN_FULFILLED with correct creds', () => {});
});
