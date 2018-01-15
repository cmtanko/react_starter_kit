import PouchDB from 'pouchdb';
import store from './store/configureStore';
import { loadUsers } from './actions/userActions';

let db = new PouchDB('http://localhost:5984/app');

db
  .changes({
    live: true,
    include_doc: true, // eslint-disable-line camelcase
    since: 'now'
  })
  .on('change', changeCallback)
  .on('error', console.log.bind(console));

function changeCallback() {
  console.log('DB changed !');
  store.dispatch(loadUsers());

  // TODO: add/remove specific docs instead of fetching allDocs

  // if (change.deleted) {
  //   store.dispatch(deletePerson(change.id))
  // } else {
  //   store.dispatch(upsertPerson(change.doc));
  // }
}

export default db;
