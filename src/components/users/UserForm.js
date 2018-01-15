import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormControl, Button } from 'react-bootstrap';

const UserForm = ({ allCountries, allCities, onChange, onAbort }) => {
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
        <FormControl
          name="country"
          componentClass="select"
          required
          placeholder="Country"
          onChange={onChange}
        >
          {allCountries.map((country, index) => {
            return (
              <option key={index} value={country.id}>
                {country.country}
              </option>
            );
          })}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl
          name="city"
          componentClass="select"
          required
          placeholder="City"
        >
          {allCities.map((city, index) => {
            return (
              <option key={index} value={city.id}>
                {city.city}
              </option>
            );
          })}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <Button bsStyle="primary">Save</Button>
        <Button bsStyle="default" onClick={onAbort}>
          Back
        </Button>
      </FormGroup>
    </form>
  );
};

UserForm.propTypes = {
  allCountries: PropTypes.array.isRequired,
  allCities: PropTypes.array.isRequired,
  onChange: PropTypes.function,
  onAbort: PropTypes.function
};

export default UserForm;
