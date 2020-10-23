import axios from 'axios';
import Environment from '~/config/Environment';

export const api = axios.create({
  baseURL: Environment.BASE_URL,
  timeout: 10000,
});
