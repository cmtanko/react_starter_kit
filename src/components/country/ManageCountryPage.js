import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../../actions/countryActions';
import CountryForm from './CountryForm';
import toastr from 'toastr';
import { saveCountry, loadCountries } from '../../actions/countryActions';

class ManageCountryPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      country: Object.assign({}, this.props.country),
      errors: {},
      saving: false
    };
    this.updateCountryState = this.updateCountryState.bind(this);
    this.saveCountry = this.saveCountry.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.country.id !== nextProps.country.id) {
      this.setState({ country: nextProps.country });
    }
  }

  redirect() {
    toastr.success('Country Saved!');
    this.setState({ saving: false });
    this.context.router.history.push('/countries');
  }

  updateCountryState(event) {
    const field = event.target.name;
    let country = this.state.country;
    country[field] = event.target.value;
    return this.setState({ country: country });
  }

  saveCountry() {
    this.props
      .saveCountry(this.state.country)
      .then(() => {
        this.props.loadCountries();
        this.redirect();
      })
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Manage Country</h1>
        <CountryForm
          country={this.state.country}
          onSave={this.saveCountry}
          onChange={this.updateCountryState}
        />
      </div>
    );
  }
}

ManageCountryPage.propTypes = {};

ManageCountryPage.contextTypes = {
  router: PropTypes.object
};

function getCountryById(countries, id) {
  const country = countries.filter(country => country.id == id);
  if (country) return country[0];
  return null;
}

const mapStateToProps = (state, ownProps) => {
  const countryId = ownProps.match.params.id;

  let country = {
    country: ''
  };
  if (countryId && state.countries.length > 0) {
    country = getCountryById(state.countries, countryId);
  }
  return {
    country: country
  };
};

const mapDispatchToProps = {
  saveCountry,
  loadCountries
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(ManageCountryPage);
