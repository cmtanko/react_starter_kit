import PouchDB from 'pouchdb';

import store from './store/configureStore';
import { loadUsers } from './actions/userActions';

let localDB = new PouchDB('tester');
let remoteDB = new PouchDB('http://localhost:5984/app1');

localDB
  .sync(remoteDB, {
    live: true
  })
  .on('change', function(change) {
    store.dispatch(loadUsers());
  })
  .on('error', function(err) {
    // yo, we got an error! (maybe the user went offline?)
  });
export default localDB;
