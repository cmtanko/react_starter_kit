import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  user: PropTypes.object.isRequired
};

const UserListRow = ({ user }) => (
  <tr>
    <td>
      <Link to={'/user/' + user.id}>
        {user.first_name} {user.last_name}
      </Link>
    </td>
    <td>{user.email}</td>
    <td>
      {user.address} {user.address2}, {user.district}-{user.city}
    </td>
    <td>{user.country}</td>
    <td>{user.activebool ? 'Active' : 'Inactive'}</td>
  </tr>
);

UserListRow.propTypes = propTypes;

export default UserListRow;
