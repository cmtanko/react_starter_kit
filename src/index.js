import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/toastr/build/toastr.min.css';
import { loadUsers } from './actions/userActions';
import { loadCities } from './actions/cityActions';
import { loadCourses } from './actions/courseActions';
import { loadCountries } from './actions/countryActions';
// import { pouchFetchAllNotes } from "./actions/noteActions";
import registerServiceWorker from './registerServiceWorker';
// import { db } from "./configureDB";

store.dispatch(loadUsers());
store.dispatch(loadCities());
store.dispatch(loadCourses());
store.dispatch(loadCountries());

// Subscribe PouchDB change event
// db
//   .changes({
//     since: "now",
//     live: true
//   })
//   .on("change", change => {
//     // Very idiot and inefficient way to sync.
//     // In product app, this should be more sophisticated like: http://pouchdb.com/2015/02/28/efficiently-managing-ui-state-in-pouchdb.html
//     console.log('stroe.dispatch(pouchFetchAllNotes())');
//     store.dispatch(pouchFetchAllNotes());
//   })
//   .on("error", err => {
//     console.log(err);
//   });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
