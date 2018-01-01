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
import registerServiceWorker from './registerServiceWorker';

store.dispatch(loadUsers());
store.dispatch(loadCities());
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
