import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormControl, Button } from 'react-bootstrap';

const CourseForm = props => {
  const { course, allAuthors, onSave, onChange, errors, saving } = props;

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
        onChange={onChange}
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
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </FormGroup>
    </form>
  );
};

CourseForm.propTypes = {
  saving: PropTypes.bool,
  errors: PropTypes.object,
  allCourses: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

export default CourseForm;
