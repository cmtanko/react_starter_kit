import * as types from './actionTypes';
import * as users from '../services/users';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return users
      .fetchAllUsers()
      .then(users => dispatch(loadUsersSuccess(users)))
      .catch(error => {
        throw error;
      });
  };
}
