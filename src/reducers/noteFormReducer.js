import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  note: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.POUCH_REQUEST_GET_NOTE:
      return Object.assign({}, state, {
        isFetching: true
      });

    case types.POUCH_RECEIVE_GET_NOTE:
      return Object.assign({}, state, {
        isFetching: false,
        note: action.note
      });

    default:
      return state;
  }
};
