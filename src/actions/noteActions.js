import * as types from './actionTypes';
import { db } from '../configureDB';

export function pouchRequestFetchAllNotes() {
  return {
    type: types.POUCH_REQUEST_FETCH_ALL_NOTES
  };
}
export function pouchReceiveFetchAllNotes(res) {
  return {
    type: types.POUCH_RECEIVE_FETCH_ALL_NOTES,
    noteList: res.rows.map(row => row.doc)
  };
}
export function pouchFetchAllNotes() {
  console.log('Feting notes');
  return dispatch => {
    dispatch(pouchRequestFetchAllNotes());

    db.get('jckoiy', function(err, res) {
      if (err) {
        return console.log('Error', JSON.stringify(err));
      } else {
        console.log('Output =' + res);
        dispatch(pouchReceiveFetchAllNotes(res));
      }
    });
    // debugger;
    // return db.query({
    //     map: ((doc) => {
    //         (doc.type)
    //     }).toString()
    // }, {key: 'note', include_docs: true}).then(res => {
    //     console.log(res);
    //     dispatch(pouchReceiveFetchAllNotes(res))
    // }).catch(err => {
    //     console.log(err)
    // })
  };
}

export function pouchRequestGetNote() {
  return {
    type: types.POUCH_REQUEST_GET_NOTE
  };
}

export function pouchReceiveGetNote(note) {
  return {
    type: types.POUCH_RECEIVE_GET_NOTE,
    note: note
  };
}
export function pouchGetNote(id) {
  return dispatch => {
    dispatch(pouchRequestGetNote());

    return db
      .get(id)
      .then(res => {
        dispatch(pouchReceiveGetNote(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function pouchRequestPutNote() {
  return {
    type: types.POUCH_REQUEST_PUT_NOTE
  };
}
export function pouchReceivePutNote() {
  return {
    type: types.POUCH_RECEIVE_PUT_NOTE
  };
}
export function pouchPutNote(note) {
  return dispatch => {
    dispatch(pouchRequestPutNote());

    return db
      .put(note)
      .then(res => {
        dispatch(pouchReceivePutNote());
      })
      .catch(err => {
        console.log(err);
      });
  };
}
