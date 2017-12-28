import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormControl, Button } from 'react-bootstrap';

const CourseForm = ({
  course,
  allAuthors,
  onSave,
  onChange,
  loading,
  errors
}) => {
  return (
    <form>
      <FormGroup>
        <FormControl
          type="text"
          name="title"
          label="Title"
          placeholder="Title"
          value={course.title}
          onChange={onChange}
          error={errors.title}
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          type="category"
          name="category"
          label="Category"
          placeholder="Category"
          value={course.category}
          onChange={onChange}
          error={errors.category}
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          type="length"
          name="length"
          label="Length"
          placeholder="Length"
          value={course.length}
          onChange={onChange}
          error={errors.length}
        />
      </FormGroup>
      <FormControl
        value={course.authorId}
        name="authorId"
        componentClass="select"
        required
        placeholder="Type"
      >
        {allAuthors.map((author, index) => {
          return (
            <option key={index} value={author.value}>
              {author.text}
            </option>
          );
        })}
      </FormControl>
      <FormGroup>
        <Button bsStyle="primary" onClick={onSave}>
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allCourses: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
