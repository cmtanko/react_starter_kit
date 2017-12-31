import config from '../config/config';
import http from '../utils/http';

export async function fetchAllUsers() {
  let url = config.endpoints.users;
  let { data } = await http.get(url);

  return data;
}
