import React from 'react';
import PropTypes from 'prop-types';
import UserListRow from './UserListRow';

const propTypes = {
  users: PropTypes.array.isRequired
};

const UserList = ({ users }) => (
  <table className="table">
    <thead>
      <tr>
        <th>User Name</th>
        <th>email</th>
        <th>Address</th>
        <th>Country</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
      {users &&
        users.map((user, index) => <UserListRow key={index} user={user} />)}
    </tbody>
  </table>
);

UserList.propTypes = propTypes;

export default UserList;
