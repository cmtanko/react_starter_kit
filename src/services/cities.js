import config from '../config/config';
import http from '../utils/http';

export async function fetchAllCities() {
  let url = config.endpoints.cities;
  let { data } = await http.get(url);

  return data;
}
