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

const DEFAULT_STATE = { user: {}, contacts: [] };

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
const logInUser = () => dispatch => {
	dispatch({ type: 'LOG_IN_SENT' });
	fetch()
		.then(() => {
			dispatch({ type: 'LOG_IN_SUCCESS' });
		})
		.catch(err => {
			dispatch({ type: 'LOG_IN_REJECTED' });
		});
};

logInUser(); // returns dispatch => {}

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch(logInUser());

store.dispatch(updateUser({ foo: 'foo' }));
store.dispatch(updateUser({ bar: 'bar' }));
store.dispatch(updateUser({ foo: 'baz' }));

store.dispatch(addContact({ name: 'My Name', number: '12345' }));
store.dispatch(addContact({ name: 'My Name 2', number: '54321' }));
store.dispatch(addContact({ name: 'My Name 3', number: '55353' }));

console.log(store.getState());
