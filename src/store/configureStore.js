import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware(), reduxImmutableStateInvariant())
);

export default store;
