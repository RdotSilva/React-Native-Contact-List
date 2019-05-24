import * as actions from './actions';
import { exportAllDeclaration } from '@babel/types';

test('updateUser returns an action', () => {
	expect(actions.updateUser({ name: 'test name' })).toMatchSnapshot();
});

test('updateUser returns an action when passed empty object', () => {
	expect(actions.updateUser({})).toMatchSnapshot();
});

test('updateUser returns an action when passed empty name', () => {
	expect(actions.updateUser({ name: '' })).toMatchSnapshot();
});
