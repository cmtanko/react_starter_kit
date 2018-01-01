import toastr from 'toastr';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FormGroup, Button } from 'react-bootstrap';

import * as countryActions from '../../actions/countryActions';

const propTypes = {};

class CountryPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteCountry = this.deleteCountry.bind(this);
    this.redirectToAddCountryPage = this.redirectToAddCountryPage.bind(this);
  }

  deleteCountry(event, id) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .deleteCountry(id)
      .then(() => {
        toastr.success('Country deleted successfully!');
      })
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirectToAddCountryPage() {
    this.props.history.push('/country');
  }

  render() {
    const { countries } = this.props;
    return (
      <div className="">
        <h1>Country List</h1>
        <form>
          <FormGroup>
            <Button bsStyle="primary" onClick={this.redirectToAddCountryPage}>
              Add Country
            </Button>
          </FormGroup>
        </form>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Country</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index}>
                <td>{country.id}</td>
                <td>
                  <Link to={'/country/' + country.id}>{country.country}</Link>
                </td>
                <td>
                  <FormGroup>
                    <Button
                      bsStyle="warning"
                      onClick={event => this.deleteCountry(event, country.id)}
                    >
                      Delete
                    </Button>
                  </FormGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

CountryPage.propTypes = propTypes;
CountryPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    countries: state.countries
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage);
