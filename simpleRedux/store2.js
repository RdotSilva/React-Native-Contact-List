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

	dispatch(update) {
		this.state = this.reducer(this.state, update);
	}
}

const contactReducer = (state, newContact) => [...state, newContact];
const userReducer = (state, update) => ({
	...state,
	...update
});

const DEFAULT_STATE = { user: {}, contacts: [] };

const reducer = (state, action) => {
	if (action.type === 'UPDATE_USER') {
		return {
			...state,
			user: userReducer(state.user, action.payload)
		};
	}

	if (action.type === 'UPDATE_CONTACT') {
		return {
			...state,
			contacts: contactReducer(state.contacts, action.payload)
		};
	}

	return state;
};

//Action Creators
const updateUser = update => ({
	type: UPDATE_USER,
	payload: update
});

const addContact = newContact => ({
	type: UPDATE_CONTACT,
	payload: newContact
});

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch(updateUser({ foo: 'foo' }));
store.dispatch(updateUser({ bar: 'bar' }));
store.dispatch(updateUser({ foo: 'baz' }));

store.dispatch(addContact({ name: 'My Name', number: '12345' }));
store.dispatch(addContact({ name: 'My Name 2', number: '54321' }));

console.log(store.getState());
