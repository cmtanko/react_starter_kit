import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormControl, Button } from 'react-bootstrap';

const CountryForm = ({ country, onChange, onAbort, onSave }) => {
  return (
    <form>
      <FormGroup>
        <FormControl
          type="text"
          name="country"
          label="Country"
          placeholder="Country"
          value={country.country}
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

CountryForm.propTypes = {
  country: PropTypes.object.isRequired,
  onChange: PropTypes.function,
  onAbort: PropTypes.function,
  onSave: PropTypes.function
};

export default CountryForm;
