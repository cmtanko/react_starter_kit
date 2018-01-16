import { combineReducers } from 'redux';

import users from './userReducer';
import countries from './countryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  countries,
  ajaxCallsInProgress
});

export default rootReducer;
