import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import { connect } from 'react-redux';

const propTypes = {};

class ManageUserPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.users)
    };

    this.updateState = this.updateState.bind(this);
    this.onAbort = this.onAbort.bind(this);
  }

  updateState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  }

  onAbort(event) {
    this.context.router.history.push('/users');
  }

  saveUser(event) {
    event.preventDefault();
    this.setState({ saving: true });
  }

  render() {
    return (
      <div>
        <h1>Manage User</h1>
        <UserForm
          allCountries={this.props.countries}
          allCities={this.props.cities}
          onChange={this.updateState}
          onAbort={this.onAbort}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    countries: state.countries,
    cities: state.cities
  };
}

ManageUserPage.propTypes = propTypes;
ManageUserPage.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps)(ManageUserPage);
