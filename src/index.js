import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/toastr/build/toastr.min.css';

import App from './App';
import store from './store/configureStore';
import { loadUsers } from './actions/userActions';
import { loadCountries } from './actions/countryActions';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(loadUsers());
store.dispatch(loadCountries());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
