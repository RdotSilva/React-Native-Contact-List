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

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch({ type: UPDATE_USER, payload: { foo: 'foo' } });
store.dispatch({ type: UPDATE_USER, payload: { bar: 'bar' } });
store.dispatch({ type: UPDATE_USER, payload: { foo: 'baz' } });

store.dispatch({
	type: UPDATE_CONTACT,
	payload: { name: 'My Name', number: '1234566789' }
});

store.dispatch({
	type: UPDATE_CONTACT,
	payload: { name: 'Fake Name', number: '525525' }
});

console.log(store.getState());
