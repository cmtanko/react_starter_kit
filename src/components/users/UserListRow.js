import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const propTypes = {
  user: PropTypes.object.isRequired
};

const UserListRow = props => {
  debugger;
  const {
    first_name,
    last_name,
    email,
    address,
    address2,
    district,
    city,
    country,
    activebool
  } = props.user.user;
  return (
    <tr>
      <td>
        <Link to={routes.USER + props.user._id}>
          {first_name} {last_name}
        </Link>
      </td>
      <td>{email}</td>
      <td>
        {address} {address2}, {district}-{city}
      </td>
      <td>{country}</td>
      <td>{activebool ? 'Active' : 'Inactive'}</td>
    </tr>
  );
};

UserListRow.propTypes = propTypes;

export default UserListRow;
