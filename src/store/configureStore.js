import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunk, promiseMiddleware(), reduxImmutableStateInvariant())
);

export default store;

// let createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware(), reduxImmutableStateInvariant())(createStore);

// export default createStoreWithMiddleware(rootReducer);

// 'use strict';

// import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
// import reducer from '../reducers';
// import reduxLogger from 'redux-logger';
// import thunk from 'redux-thunk';

// // const logger = reduxLogger();

// let createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

// export default createStoreWithMiddleware(reducer);
