import axios from 'axios';
import { URL } from './constants';

export const api = axios.create({
  baseURL: URL('api'),
  withCredentials: true,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
