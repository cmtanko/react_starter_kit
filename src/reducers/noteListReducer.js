import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  noteList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.POUCH_REQUEST_FETCH_ALL_NOTES:
      return Object.assign({}, state, {
        isFetching: true
      });

    case types.POUCH_RECEIVE_FETCH_ALL_NOTES:
      return Object.assign({}, state, {
        isFetching: false,
        noteList: action.noteList
      });
    default:
      return state;
  }
};
