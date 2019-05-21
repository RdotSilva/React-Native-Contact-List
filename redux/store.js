// import { createStore } from 'redux';
const { createStore, combineReducers } = require('redux');

// Action Types
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

// Init blank state
const DEFAULT_STATE = { user: {}, contacts: [] };

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

const reducer = combineReducers({
	user: userReducer,
	contacts: contactReducer
});

//Action Creators
const updateUser = update => ({
	type: UPDATE_USER,
	payload: update
});

const addContact = newContact => ({
	type: UPDATE_CONTACT,
	payload: newContact
});

const store = createStore(reducer, DEFAULT_STATE);

store.dispatch(updateUser({ foo: 'foo' }));
store.dispatch(updateUser({ bar: 'bar' }));
store.dispatch(updateUser({ foo: 'baz' }));

store.dispatch(addContact({ name: 'My Name', number: '12345' }));
store.dispatch(addContact({ name: 'My Name 2', number: '54321' }));
store.dispatch(addContact({ name: 'My Name 3', number: '55353' }));

console.log(store.getState());
