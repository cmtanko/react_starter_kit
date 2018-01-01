import * as types from './actionTypes';
import { createAction } from 'redux-actions';

import * as countries from '../services/countries';

export const deleteCountries = createAction(
  types.DELETE_COUNTRIES_SUCCESS,
  countries.deleteCountry
);

export const fetchAllCountries = createAction(
  types.LOAD_COUNTRIES_SUCCESS,
  countries.fetchAllCountries
);
