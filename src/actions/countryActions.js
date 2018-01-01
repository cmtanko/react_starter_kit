import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';
import * as countries from '../services/countries';

export function loadCountriesSuccess(countries) {
  return { type: types.LOAD_COUNTRIES_SUCCESS, countries };
}

export function updateCountrySuccess(result) {
  return { type: types.UPDATE_COUNTRIES_SUCCESS, result };
}

export function deleteCountrySuccess(result) {
  return { type: types.DELETE_COUNTRIES_SUCCESS, result };
}

export function loadCountries() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return countries
      .fetchAllCountries()
      .then(countries => dispatch(loadCountriesSuccess(countries)))
      .catch(error => {
        throw error;
      });
  };
}

export function updateCountries(country) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return countries
      .updateCountry(country)
      .then(result => {
        dispatch(loadCountries());
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCountry(country) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return countries
      .saveCountry(country)
      .then(result => {
        dispatch(loadCountries());
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteCountry(id) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return countries
      .deleteCountry(id)
      .then(result => {
        dispatch(loadCountries());
      })
      .catch(error => {
        throw error;
      });
  };
}
