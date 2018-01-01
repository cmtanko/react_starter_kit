import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';
import * as cities from '../services/cities';

export function loadCitiesSuccess(cities) {
  return { type: types.LOAD_CITIES_SUCCESS, cities };
}

export function loadCities() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return cities
      .fetchAllCities()
      .then(cities => dispatch(loadCitiesSuccess(cities)))
      .catch(error => {
        throw error;
      });
  };
}
