import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function countryReducer(state = initialState.countries, action) {
  switch (action.type) {
    case types.LOAD_COUNTRIES_SUCCESS:
      return action.countries;
    case types.DELETE_COUNTRIES_SUCCESS:
      return [...state.filter(country => country.id !== action.country.id)];
    default:
      return state;
  }
}
