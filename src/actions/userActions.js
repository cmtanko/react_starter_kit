import crypto from 'crypto';
import db from '../db';
import * as people from '../services/people';
import { createAction } from 'redux-actions';

export function setGreeting(greeting) {
  return {
    type: 'SET_GREETING',
    greeting
  };
}

export function togglePeopleModal() {
  return {
    type: 'TOGGLE_PEOPLE_MODAL'
  };
}

export const fetchPeople = createAction('FETCH_PEOPLE', people.fetchAllPeople);

export function deletePerson() {
  return {
    type: 'DELETE_PERSON'
  };
}

export function deletePeople() {
  return db
    .allDocs({
      include_docs: true // eslint-disable-line camelcase
    })
    .then(records => {
      return Promise.all(
        records.rows.map(row => row.doc).map(doc => db.remove(doc))
      ).then(() => {
        return {
          type: 'DELETE_PEOPLE'
        };
      });
    })
    .catch(err => {
      throw err;
    });
}

export function upsertPerson(name) {
  return db
    .put({
      _id: generateId(),
      name: name
    })
    .then(() => {
      return {
        type: 'UPSERT_PERSON'
      };
    })
    .catch(err => {
      throw err;
    });
}

// function mapDocsFromPouch(records) {
//   if (!records) {
//     return {};
//   }

//   return records.rows.map(record => record.doc);
// }

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}
