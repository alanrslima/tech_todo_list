import axios from 'axios';
// import env from '../config/Environment';

export const api = axios.create({
  baseURL: 'http://192.168.15.9:3333',
  timeout: 10000,
});
