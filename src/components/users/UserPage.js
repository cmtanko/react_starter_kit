import { connect } from 'react-redux';
import React, { Component } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import { loadUsers } from '../../actions/userActions';
import UserList from './UserList';

class UserPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }

  redirectToAddUserPage() {
    this.props.history.push('/user');
  }

  render() {
    const { list } = this.props.users;
    return (
      <div className="">
        <h1>User Page</h1>
        <form>
          <FormGroup>
            <Button bsStyle="primary" onClick={this.redirectToAddUserPage}>
              Add Users
            </Button>
          </FormGroup>
        </form>
        <UserList users={list} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadUsers
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
