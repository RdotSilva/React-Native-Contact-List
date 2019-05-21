import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

// store.dispatch(updateUser({ foo: 'foo' }));
// store.dispatch(updateUser({ bar: 'bar' }));
// store.dispatch(updateUser({ foo: 'baz' }));

// store.dispatch(addContact({ name: 'My Name', number: '12345' }));
// store.dispatch(addContact({ name: 'My Name 2', number: '54321' }));
// store.dispatch(addContact({ name: 'My Name 3', number: '55353' }));

// console.log(store.getState());

export default store;
