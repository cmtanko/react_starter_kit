import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import UserForm from './UserForm';

const propTypes = {};

class ManageUserPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.users)
    };
  }

  updateState = event => {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  };

  onAbort = event => {
    this.context.router.history.push('/users');
  };

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

const mapStateToProps = state => {
  cities: state.cities;
  countries: state.countries;
};

ManageUserPage.propTypes = propTypes;
ManageUserPage.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps)(ManageUserPage);
