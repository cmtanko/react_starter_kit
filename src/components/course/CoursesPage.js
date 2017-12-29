import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    this.props.history.push('/course');
  }

  render() {
    const { courses } = this.props;
    return (
      <div className="">
        <h1>Courses Page</h1>
        <form>
          <FormGroup>
            <Button bsStyle="primary" onClick={this.redirectToAddCoursePage}>
              Add Course
            </Button>
          </FormGroup>
        </form>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
