import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';
import * as countries from '../services/countries';
import { createAction } from 'redux-actions';

// export function loadCountriesSuccess(countries) {
//   return { type: types.LOAD_COUNTRIES_SUCCESS, countries };
// }

// export function saveCountrySuccess(countries) {
//   return { type: types.SAVE_COUNTRIES_SUCCESS, countries };
// }

export function updateCountrySuccess(result) {
  return { type: types.UPDATE_COUNTRIES_SUCCESS, result };
}

// export function deleteCountrySuccess(result) {
//   return { type: types.DELETE_COUNTRIES_SUCCESS, result };
// }

// export function loadCountries() {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return countries
//       .fetchAllCountries()
//       .then(countries => dispatch(loadCountriesSuccess(countries)))
//       .catch(error => {
//         throw error;
//       });
//   };
// }

export function updateCountries(country) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return countries
      .updateCountry(country)
      .then(result => {
        dispatch(loadCountries());
        dispatch(updateCountrySuccess());
      })
      .catch(error => {
        throw error;
      });
  };
}

// export function saveCountry(country) {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return countries
//       .saveCountry(country)
//       .then(result => {
//         dispatch(loadCountries());
//         dispatch(saveCountrySuccess());
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }
export const saveCountry = createAction(
  types.SAVE_COUNTRIES_SUCCESS,
  countries.saveCountry
);
export const loadCountries = createAction(
  types.LOAD_COUNTRIES_SUCCESS,
  countries.fetchAllCountries
);
export const deleteCountry = createAction(
  types.DELETE_COUNTRIES_SUCCESS,
  countries.deleteCountry
);

// export function deleteCountry(id) {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return countries
//       .deleteCountry(id)
//       .then(result => {
//         dispatch(loadCountries());
//         dispatch(deleteCountrySuccess());
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }
