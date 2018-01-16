import { createAction } from 'redux-actions';

import * as user from '../services/people';
import * as types from '../actions/actionTypes';

export const loadUsers = createAction(types.LOAD_USERS_SUCCESS, user.loadUsers);
export const saveUser = createAction(types.SAVE_USER_SUCCESS, user.saveUser);

// export function setGreeting(greeting) {
//   return {
//     type: 'SET_GREETING',
//     greeting
//   };
// }

// export function togglePeopleModal() {
//   return {
//     type: 'TOGGLE_PEOPLE_MODAL'
//   };
// }

// export function deletePerson() {
//   return {
//     type: 'DELETE_PERSON'
//   };
// }

// export function deletePeople() {
//   return db
//     .allDocs({
//       include_docs: true // eslint-disable-line camelcase
//     })
//     .then(records => {
//       return Promise.all(
//         records.rows.map(row => row.doc).map(doc => db.remove(doc))
//       ).then(() => {
//         return {
//           type: 'DELETE_PEOPLE'
//         };
//       });
//     })
//     .catch(err => {
//       throw err;
//     });
// }

// export function upsertPerson(name) {
//   return db
//     .put({
//       _id: generateId(),
//       name: name
//     })
//     .then(() => {
//       return {
//         type: 'UPSERT_PERSON'
//       };
//     })
//     .catch(err => {
//       throw err;
//     });
// }
