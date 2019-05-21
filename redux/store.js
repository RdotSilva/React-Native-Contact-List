import { createStore, applyMiddleware } from 'redux';
import { addContact } from './actions';
import reducer from './reducer';

const thunk = store => next => action => {
	if (typeof action === 'function') {
		action(store.dispatch);
	} else {
		next(action);
	}
};

const store = createStore(reducer, applyMiddleware(thunk);

// store.dispatch(updateUser({ foo: 'foo' }));
// store.dispatch(updateUser({ bar: 'bar' }));
// store.dispatch(updateUser({ foo: 'baz' }));

store.dispatch(addContact({ name: 'My Name', phone: '12345' }));
store.dispatch(addContact({ name: 'My Name 2', phone: '54321' }));
store.dispatch(addContact({ name: 'My Name 3', phone: '55353' }));

// console.log(store.getState());

export default store;
