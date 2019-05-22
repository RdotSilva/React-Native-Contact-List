import { combineReducers } from 'redux';
import {
	UPDATE_USER,
	UPDATE_CONTACT,
	LOG_IN_SENT,
	LOG_IN_FULFILLED,
	LOG_IN_REJECTED
} from './actions';

const contactReducer = (state = [], action) => {
	if (action.type === UPDATE_CONTACT) {
		return [...state, action.payload];
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
