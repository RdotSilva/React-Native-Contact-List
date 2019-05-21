import { combineReducers } from 'redux';
import { UPDATE_USER, UPDATE_CONTACT } from './actions';

const contactReducer = (state = [], action) => {
	if (action.type === UPDATE_CONTACT) {
		return [...state, action.payload];
	}
	return state;
};

const userReducer = (state = {}, action) => {
	if (action.type === UPDATE_USER) {
		return {
			...state,
			...action.payload
		};
	}
	if (action.type === UPDATE_CONTACT) {
		return {
			...state,
			prevContact: action.payload
		};
	}
	return state;
};

// Main reducer that combines all reducers
const reducer = combineReducers({
	user: userReducer,
	contacts: contactReducer
});

export default reducer;
