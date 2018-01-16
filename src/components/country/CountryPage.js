import toastr from 'toastr';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FormGroup, Button } from 'react-bootstrap';

import { deleteCountry, loadCountries } from '../../actions/countryActions';

const propTypes = {};

class CountryPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteCountry = this.deleteCountry.bind(this);
    this.redirectToAddCountryPage = this.redirectToAddCountryPage.bind(this);
  }

  deleteCountry(id) {
    this.props
      .deleteCountry(id)
      .then(() => {
        this.props.loadCountries();
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
    const { list, isLoading } = this.props.countries;

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
            {!isLoading &&
              list &&
              list.map((country, index) => (
                <tr key={index}>
                  <td>{country.id}</td>
                  <td>
                    <Link to={'/country/' + country.id}>{country.country}</Link>
                  </td>
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

const mapStateToProps = state => ({
  countries: state.countries
});

const mapDispatchToProps = {
  deleteCountry,
  loadCountries
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(CountryPage);
