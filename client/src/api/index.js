import axios from 'axios';
import ls from 'store2';
import { URL, LOCAL_STORAGE_TOKENS_KEY } from './constants';

export const api = axios.create({
  baseURL: URL('api'),
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = ls(LOCAL_STORAGE_TOKENS_KEY);
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export const noAuthApi = axios.create({
  baseURL: URL('api'),
  withCredentials: true,
});

//export const setToken = (token) => {
//  api.defaults.headers.common.Authorization = `Bearer ${token}`;
//};
