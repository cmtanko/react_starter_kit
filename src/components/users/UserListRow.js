import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  user: PropTypes.object.isRequired
};

const UserListRow = ({ user }) => {
  return (
    <tr>
      <td>
        <Link to={'/user/' + user._id}>
          {user.user.first_name} {user.user.last_name}
        </Link>
      </td>
      <td>{user.user.email}</td>
      <td>
        {user.user.address} {user.user.address2}, {user.user.district}-{
          user.user.city
        }
      </td>
      <td>{user.country}</td>
      <td>{user.activebool ? 'Active' : 'Inactive'}</td>
    </tr>
  );
};

UserListRow.propTypes = propTypes;

export default UserListRow;
