import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import users from './userReducer';
import cities from './cityReducer';
import courses from './courseReducer';
import countries from './countryReducer';

const rootReducer = combineReducers({
  courses,
  users,
  cities,
  countries,
  ajaxCallsInProgress
});

export default rootReducer;
