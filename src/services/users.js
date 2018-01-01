import http from '../utils/http';
import config from '../config/config';

export async function fetchAllUsers() {
  let url = config.endpoints.users;
  let { data } = await http.get(url);

  return data;
}
