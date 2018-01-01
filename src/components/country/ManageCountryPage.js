import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../../actions/countryActions';
import CountryForm from './CountryForm';
import toastr from 'toastr';

class ManageCountryPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      country: Object.assign({}, this.props.country),
      errors: {},
      saving: false
    };
    this.saveCountry = this.saveCountry.bind(this);
    this.updateCountryState = this.updateCountryState.bind(this);
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
    return this.setState({ county: country });
  }

  saveCountry(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .saveCountry(this.state.country)
      .then(() => {
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

function mapStateToProps(state, ownProps) {
  const countryId = ownProps.match.params.id;

  let country = {
    id: '',
    country: ''
  };
  if (countryId && state.countries.length > 0) {
    country = getCountryById(state.countries, countryId);
  }
  return {
    country: country
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCountryPage);
