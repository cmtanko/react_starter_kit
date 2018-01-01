import { combineReducers } from 'redux';

import users from './userReducer';
import cities from './cityReducer';
import courses from './courseReducer';
import countries from './countryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  cities,
  courses,
  countries,
  ajaxCallsInProgress
});

export default rootReducer;
