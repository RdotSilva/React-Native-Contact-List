import * as actions from './actions';
import { exportAllDeclaration } from '@babel/types';

test('updateUser returns an action', () => {
	expect(actions.updateUser({ name: 'test name' })).toEqual({
		type: actions.UPDATE_USER,
		payload: { name: 'test name' }
	});
});
