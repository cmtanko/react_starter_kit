// Indentation according to the length size.
import toastr from 'toastr';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FormGroup, Button } from 'react-bootstrap';

import {
  fetchAllCountries,
  deleteCountries
} from '../../actions/countryActions';

const propTypes = {};

class CountryPage extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentWillMount() {
    this.props.fetchAllCountries();
  }

  /**
   * Delete the selected country.
   *
   * @param {number} id
   * @returns {Promise<void>}
   */
  async deleteCountry(id) {
    await this.props.deleteCountries(id);
    this.props.fetchAllCountries();
  }

  render() {
    const { list, isLoading } = this.props.countries;

    return (
      <div className="">
        <h1>Country List</h1>
        <form>
          <FormGroup>
            <Button bsStyle="primary" onClick={this.redirectToAddUserPage}>
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
            {!isLoading &&
              list &&
              list.map((country, index) => (
                <tr key={index}>
                  <td>{country.id}</td>
                  <td>{country.country}</td>
                  <td>
                    <FormGroup>
                      <Button
                        bsStyle="warning"
                        onClick={() => this.deleteCountry(country.id)}
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

//Changed to es6 as code look much cleaner.
const mapStateToProps = state => ({
  countries: state.countries
});

//Changed to es6 as code look much cleaner.
const mapDispatchToProps = {
  deleteCountries,
  fetchAllCountries
};

// Added compose so we later we can pass many things in our component
const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(CountryPage);
