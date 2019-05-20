const reducer = (state, update) => ({
	...state,
	...update
});

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

const store = new Store(reducer, { foo: 'foo' });

store.dispatch({ foo: 'foo' });
store.dispatch({ bar: 'bar' });
store.dispatch({ foo: 'baz' });

console.log(store.getState());
