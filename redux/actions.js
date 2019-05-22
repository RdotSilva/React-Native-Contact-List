import { login } from '../api';

// Action Types
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const LOG_IN_SENT = 'LOG_IN_SENT';
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED';
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED';

//Action Creators
export const updateUser = update => ({
	type: UPDATE_USER,
	payload: update
});

export const addContact = newContact => ({
	type: UPDATE_CONTACT,
	payload: newContact
});

// Async Action Creator
export const logInUser = (username, password) => dispatch => {
	dispatch({ type: LOG_IN_SENT });
	login(username, password)
		.then(token => {
			dispatch({ type: LOG_IN_FULFILLED, payload: token });
		})
		.catch(err => {
			dispatch({ type: LOG_IN_REJECTED, payload: err.message });
		});
};