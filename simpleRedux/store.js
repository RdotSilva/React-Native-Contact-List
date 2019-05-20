const reducer = (state, update) => ({
	...state,
	...update
});

let state = {};

state = reducer(state, { foo: 'foo' });
state = reducer(state, { bar: 'bar' });
state = reducer(state, { foo: 'baz' });

console.log(state); // { foo: 'baz', bar: 'bar' }

class Store {
	constructor(reducer, initialState) {
		(this.reducer = reducer), (this.state = initialState);
	}

	getState() {
		return this.state;
	}
}
