import { createStore, applyMiddleware } from 'redux';
import { addContact } from './actions';
import reducer from './reducer';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const thunkMiddleware = store => next => action => {
// 	if (typeof action === 'function') {
// 		action(store.dispatch);
// 	} else {
// 		next(action);
// 	}
// };

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

// store.dispatch(updateUser({ foo: 'foo' }));
// store.dispatch(updateUser({ bar: 'bar' }));
// store.dispatch(updateUser({ foo: 'baz' }));

// store.dispatch(addContact({ name: 'My Name', phone: '12345' }));
// store.dispatch(addContact({ name: 'My Name 2', phone: '54321' }));
// store.dispatch(addContact({ name: 'My Name 3', phone: '55353' }));

// console.log(store.getState());
