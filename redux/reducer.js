import { combineReducers } from 'redux';
import {
	UPDATE_USER,
	UPDATE_CONTACT,
	LOG_IN_SENT,
	LOG_IN_FULFILLED,
	LOG_IN_REJECTED,
	CHANGE_FIRST_CONTACT
} from './actions';

import contacts from '../contacts';

const contactReducer = (state = contacts, action) => {
	if (action.type === UPDATE_CONTACT) {
		return [...state, action.payload];
	}
	if (action.type === CHANGE_FIRST_CONTACT) {
		const [firstContact, ...rest] = state;
		if (!firstContact) return state;
		// [{name: 'jordan', phone: '1234567890'}]
		// firstContact, rest = []
		const newContact = { ...firstContact, name: 'Overwrite Name' };
		return [newContact, ...rest];
	}
	return state;
};

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return {
				...state,
				...action.payload
			};
		case UPDATE_CONTACT:
			return {
				...state,
				prevContact: action.payload
			};
		case LOG_IN_FULFILLED:
			return {
				...state,
				token: action.payload
			};
		case LOG_IN_REJECTED:
			return {
				...state,
				loginErr: action.payload
			};
		default:
			return state;
	}
};

// Main reducer that combines all reducers
const reducer = combineReducers({
	user: userReducer,
	contacts: contactReducer
});

export default reducer;
