import axios from 'axios';
import ls from 'store2';
import { URL, LOCAL_STORAGE_TOKENS_KEY } from './constants';
import { refreshAuth } from '~/features/AppBootstrap/store/events';

export const api = axios.create({
  baseURL: URL('api'),
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = ls(LOCAL_STORAGE_TOKENS_KEY);
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(
  (config) => config,
  (error) => {
    try {
      const originalRequest = error.config;

      if (
        error.response.status === 401 &&
        originalRequest &&
        !originalRequest._isRetry
      ) {
        originalRequest._isRetry = true;
        refreshAuth();
      }

      //setTimeout(() => api.request(originalRequest));
    } catch (e) {
      console.log(e);
    }
  },
);

export const noAuthApi = axios.create({
  baseURL: URL('api'),
  withCredentials: true,
});

//export const setToken = (token) => {
//  api.defaults.headers.common.Authorization = `Bearer ${token}`;
//};
