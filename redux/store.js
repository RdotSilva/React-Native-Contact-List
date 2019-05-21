import { createStore } from 'redux';
import { addContact } from './actions';
import reducer from './reducer';

const store = createStore(reducer);

// store.dispatch(updateUser({ foo: 'foo' }));
// store.dispatch(updateUser({ bar: 'bar' }));
// store.dispatch(updateUser({ foo: 'baz' }));

store.dispatch(addContact({ name: 'My Name', phone: '12345' }));
store.dispatch(addContact({ name: 'My Name 2', phone: '54321' }));
store.dispatch(addContact({ name: 'My Name 3', phone: '55353' }));

// console.log(store.getState());

export default store;
