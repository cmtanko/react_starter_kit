import { createAction } from 'redux-actions';

import * as types from './actionTypes';
import * as countries from '../services/countries';

export const saveCountry = createAction(
  types.SAVE_COUNTRIES_DATA,
  countries.saveCountry
);
export const loadCountries = createAction(
  types.LOAD_COUNTRIES_DATA,
  countries.fetchAllCountries
);
export const deleteCountry = createAction(
  types.DELETE_COUNTRIES_DATA,
  countries.deleteCountry
);
