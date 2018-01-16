import PouchDB from 'pouchdb';
import store from './store/configureStore';
import { loadUsers } from './actions/userActions';

// let db = new PouchDB('tester');

// db
//   .changes({
//     live: true,
//     // include_doc: true, // eslint-disable-line camelcase
//     since: 'now',
//   })
//   .on('change', changeCallback)
//   .on('error', console.log.bind(console));

// function changeCallback() {
//   console.log('DB changed !');
//   store.dispatch(loadUsers());

//   // TODO: add/remove specific docs instead of fetching allDocs

//   // if (change.deleted) {
//   //   store.dispatch(deletePerson(change.id))
//   // } else {
//   //   store.dispatch(upsertPerson(change.doc));
//   // }
// }
// let db = new PouchDB('tester', 'http://localhost:5984/app1', {
//   live: true,
//   retry: true
// }).on('change', function (info) {
//   debugger
//   // handle change
// }).on('paused', function (err) {
//   // replication paused (e.g. replication up to date, user went offline)
// }).on('active', function () {
//   // replicate resumed (e.g. new changes replicating, user went back online)
// }).on('denied', function (err) {
//   // a document failed to replicate (e.g. due to permissions)
// }).on('complete', function (info) {
//   // handle complete
// }).on('error', function (err) {
//   // handle error
// });

// db.cancel();

var localDB = new PouchDB('tester');
var remoteDB = new PouchDB('http://localhost:5984/app1');
// localDB.sync(remoteDB);
localDB
  .sync(remoteDB, {
    live: true
  })
  .on('change', function(change) {
    store.dispatch(loadUsers());
    // yo, something changed!
  })
  .on('error', function(err) {
    // yo, we got an error! (maybe the user went offline?)
  });
export default localDB;
