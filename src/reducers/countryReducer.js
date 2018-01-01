import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function countryReducer(state = initialState.countries, action) {
  switch (action.type) {
    case types.LOAD_COUNTRIES_SUCCESS_PENDING:
      return {
        ...state,
        isLoading: true,
        list: []
      };
    case types.LOAD_COUNTRIES_SUCCESS_FULFILLED:
      return {
        list: action.payload,
        isLoading: false
      };
    case types.DELETE_COUNTRIES_SUCCESS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case types.DELETE_COUNTRIES_SUCCESS_FULFILLED:
      return {
        ...state,
        isLoading: false
      };
    case types.SAVE_COUNTRIES_SUCCESS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case types.SAVE_COUNTRIES_SUCCESS_FULFILLED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
