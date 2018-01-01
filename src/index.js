import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import AppRouter from './components/AppRouter';

import store from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/toastr/build/toastr.min.css';

import { loadUsers } from './actions/userActions';
import { loadCities } from './actions/cityActions';
import { loadCourses } from './actions/courseActions';
import { loadCountries } from './actions/countryActions';

import registerServiceWorker from './registerServiceWorker';

store.dispatch(loadUsers());
store.dispatch(loadCities());
store.dispatch(loadCourses());
store.dispatch(loadCountries());

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
