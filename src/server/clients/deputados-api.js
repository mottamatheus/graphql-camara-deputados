import axios from 'axios';

import { BASE_URL } from '../config';

const client = axios.create({
  baseURL: BASE_URL,
  headers: { accept: 'application/json' },
});

export default client;
