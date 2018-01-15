import { connect } from 'react-redux';
import React, { Component } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import { fetchPeople } from '../../actions/userActions';

class UserPage extends Component {
  constructor(props, context) {
    super(props, context);
    console.dir(props);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }
  redirectToAddUserPage() {
    this.props.history.push('/user');
  }

  render() {
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
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPeople
};

function mapStateToProps(state, ownProps) {
  return {
    people: state.people
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
