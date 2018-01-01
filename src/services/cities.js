import http from '../utils/http';
import config from '../config/config';

export async function fetchAllCities() {
  let url = config.endpoints.cities;
  let { data } = await http.get(url);

  return data;
}
