const fetch = require('isomorphic-fetch');

const login = async (username, password) => {
	const response = await fetch('http://localhost:8000', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ username, password })
	});

	if (response.ok) {
		return true;
	}

	const errMessage = await response.text();
	throw new Error(errMessage);
};

// Action Types
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';

class Store {
	constructor(reducer, initialState) {
		(this.reducer = reducer), (this.state = initialState);
	}

	getState() {
		return this.state;
	}

	dispatch(action) {
		if (typeof action === 'function') {
			action(this.dispatch.bind(this));
		} else {
			console.log('received an action:', action.type);
			this.state = this.reducer(this.state, action);
		}
	}
}

const contactReducer = (state, action) => {
	if (action.type === UPDATE_CONTACT) {
		return [...state, action.payload];
	}
	return state;
};

const userReducer = (state, action) => {
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
		case 'LOG_IN_SUCCESS':
			return {
				...state,
				token: 'fakeToken'
			};
		default:
			return state;
	}
};

const DEFAULT_STATE = { user: {}, contacts: [] };

// Main reducer

const reducer = (state, action) => ({
	user: userReducer(state.user, action),
	contacts: contactReducer(state.contacts, action)
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

// Async Action Creator
const logInUser = (username, password) => dispatch => {
	dispatch({ type: 'LOG_IN_SENT' });
	login(username, password)
		.then(() => {
			dispatch({ type: 'LOG_IN_SUCCESS' });
		})
		.catch(err => {
			dispatch({ type: 'LOG_IN_REJECTED' });
		});
};

logInUser(); // returns dispatch => {}

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch(logInUser('username', 'password'));

// store.dispatch(logInUser());

// store.dispatch(updateUser({ foo: 'foo' }));
// store.dispatch(updateUser({ bar: 'bar' }));
// store.dispatch(updateUser({ foo: 'baz' }));

// store.dispatch(addContact({ name: 'My Name', number: '12345' }));
// store.dispatch(addContact({ name: 'My Name 2', number: '54321' }));
// store.dispatch(addContact({ name: 'My Name 3', number: '55353' }));

console.log(store.getState());
