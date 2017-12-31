import axios from 'axios';
import config from '../config/config';

const http = axios.create({
  baseURL: config.baseUri,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
