import config from '../config/config';
import http from '../utils/http';

export async function fetchAllCountries() {
  let url = config.endpoints.countries;
  let { data } = await http.get(url);

  return data;
}

export async function saveCountry(country) {
  let url = config.endpoints.countries;
  let { data } = await http.post(url, country);

  return data;
}

export async function deleteCountry(countryId) {
  let url = config.endpoints.countries + '/' + countryId;
  let { data } = await http.delete(url);

  return data;
}

export async function updateCountry(country) {
  let url = config.endpoints.countries + '/' + country.id;
  let { data } = await http.put(url, { country: country.country });

  return data;
}
