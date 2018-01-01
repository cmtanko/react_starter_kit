import http from '../utils/http';
import config from '../config/config';

export async function fetchAllCountries() {
  let url = config.endpoints.countries;
  let { data } = await http.get(url);

  return data;
}

export async function deleteCountry(countryId) {
  let url = config.endpoints.countries + '/' + countryId;
  let { data } = await http.delete(url);

  return data;
}
