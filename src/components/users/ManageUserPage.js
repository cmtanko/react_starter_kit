import toastr from 'toastr';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import UserForm from './UserForm';
import { saveUser, loadUsers } from '../../actions/userActions';

const propTypes = {};

class ManageUserPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.users)
    };

    this.updateState = this.updateState.bind(this);
    this.onAbort = this.onAbort.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    this.props
      .saveUser(this.state.user)
      .then(() => {
        this.props.loadUsers();
        this.redirect();
      })
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    toastr.success('Country Saved!');
    this.setState({ saving: false });
    this.context.router.history.push('/users');
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

  render() {
    return (
      <div>
        <h1>Manage User</h1>
        <UserForm
          allCountries={this.props.countries}
          allCities={this.props.cities}
          onChange={this.updateState}
          onAbort={this.onAbort}
          onSave={this.onSave}
        />
      </div>
    );
  }
}

ManageUserPage.propTypes = propTypes;
ManageUserPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    countries: state.countries,
    cities: state.cities
  };
}
const mapDispatchToProps = {
  saveUser,
  loadUsers
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));
export default enhance(ManageUserPage);
