import { createAction } from 'redux-actions';

import * as types from './actionTypes';
import * as countries from '../services/countries';

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
