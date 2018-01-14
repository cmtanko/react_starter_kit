import { combineReducers } from 'redux';

import users from './userReducer';
import cities from './cityReducer';
import courses from './courseReducer';
import countries from './countryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import noteListReducer from './noteListReducer';
import noteFormReducer from './noteFormReducer';

const rootReducer = combineReducers({
  courses,
  users,
  cities,
  countries,
  ajaxCallsInProgress
  // noteFormReducer,
  // noteListReducer
});

export default rootReducer;
