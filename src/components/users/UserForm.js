import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormControl, Button } from 'react-bootstrap';

const UserForm = ({ onChange, onAbort, onSave }) => {
  return (
    <form>
      <FormGroup>
        <FormControl
          type="text"
          name="first_name"
          label="FirstName"
          placeholder="FirstName"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          type="text"
          name="last_name"
          label="LastName"
          placeholder="LastName"
          onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          type="text"
          name="email"
          label="Email"
          placeholder="Email"
          onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          type="text"
          name="address1"
          label="Address1"
          placeholder="Address1"
          onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          type="text"
          name="address2"
          label="Address2"
          placeholder="Address2"
          onChange={onChange}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          type="text"
          name="district"
          label="District"
          placeholder="District"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Button bsStyle="primary" onClick={onSave}>
          Save
        </Button>
        <Button bsStyle="default" onClick={onAbort}>
          Back
        </Button>
      </FormGroup>
    </form>
  );
};

UserForm.propTypes = {
  onSave: PropTypes.function,
  onChange: PropTypes.function,
  onAbort: PropTypes.function
};

export default UserForm;
