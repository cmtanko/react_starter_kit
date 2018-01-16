import { createAction } from 'redux-actions';

import * as user from '../services/people';
import * as types from '../actions/actionTypes';

export const loadUsers = createAction(types.LOAD_USERS_DATA, user.loadUsers);
export const saveUser = createAction(types.SAVE_USER_DATA, user.saveUser);
