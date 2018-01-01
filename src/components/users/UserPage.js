import { connect } from 'react-redux';
import React, { Component } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import UserList from './UserList';

class UserPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  redirectToAddUserPage = () => {
    this.props.history.push('/user');
  };

  render() {
    const { users } = this.props;
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
        <UserList users={users} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserPage);
