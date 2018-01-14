import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pouchFetchAllNotes, pouchPutNote } from '../../actions/noteActions';
import { push } from 'react-router-redux';

const id = () =>
  Math.random()
    .toString(36)
    .substring(7);

class NoteList extends Component {
  constructor(props, context) {
    super(props, context);
    debugger;
  }

  componentWillMount() {
    this.props.onComponentWillMount();
  }

  render() {
    const { noteList, onAddClick, onListItemClick } = this.props;
    return (
      <div>
        <input type="text" ref="new_name" />
        <button
          onClick={() => {
            onAddClick(this.refs.new_name.value);
          }}
        >
          Add Note
        </button>

        <ul>
          {/* {noteList}
          {noteList.map(note => (
            <li key={note._id}>
              <a
                href="#"
                // onClick={e => {
                //   e.preventDefault();
                //   onListItemClick(note._id);
                // }}
              >
                {note.title}
              </a>
            </li>
          ))} */}
        </ul>
      </div>
    );
  }
}

NoteList.propTypes = {};

const mapStateToProps = state => ({
  noteList: state.noteList
});

const mapDispatchToProps = dispatch => {
  return {
    onComponentWillMount: () => {
      dispatch(pouchFetchAllNotes());
    },
    onAddClick: title => {
      if (title == '') {
        return;
      }

      const _id = id();
      const note = {
        _id,
        title,
        type: 'note'
      };
      dispatch(pouchPutNote(note)).then(() => {
        dispatch(push('notes/' + _id));
      });
    },
    onListItemClick: _id => {
      dispatch(push('notes/' + _id));
    }
  };
};

const enhance = connect(mapStateToProps, mapDispatchToProps);
export default enhance(NoteList);
