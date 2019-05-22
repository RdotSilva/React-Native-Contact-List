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
