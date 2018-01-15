import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default (state = initialState.users, action) => {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS_PENDING:
      return {
        ...state,
        isLoading: true,
        list: []
      };
    case types.LOAD_USERS_SUCCESS_FULFILLED:
      return {
        list: action.payload,
        isLoading: false
      };

    case types.SAVE_USER_SUCCESS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case types.SAVE_USER_SUCCESS_FULFILLED:
      return {
        ...state,
        isLoading: false
      };

    case 'SET_GREETING':
      return {
        ...state,
        greeting: action.greeting
      };
    case 'TOGGLE_PEOPLE_MODAL':
      return {
        ...state,
        peopleModalOpen: !state.peopleModalOpen
      };
    case 'DELETE_PERSON':
      return state;
    case 'DELETE_PEOPLE':
      return state;
    case 'UPSERT_PERSON':
      return state;
    default:
      return state;
  }
};
