import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const propTypes = {
  courses: PropTypes.array.isRequired
};

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
    </thead>
    <tbody>
      {courses.map(course => <CourseListRow key={course.id} course={course} />)}
    </tbody>
  </table>
);

CourseList.propTypes = propTypes;

export default CourseList;
