import { api } from '../index';
import ls from 'store2';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';
import { setToken } from '~/api';

export class AppBootstrapController {
  static getServices = () => api.get('/service');

  static login = ({ email, password }) =>
    api.post('/user/login', { email, password });

  static logout = () => api.post('/user/logout');

  static checkAuth = () => {
    setToken(ls(LOCAL_STORAGE_TOKENS_KEY));

    return api.get('/user/auth');
  };

  static register = (payload) => api.post('/user/register', payload);

  static updateUser = (payload) => api.put('/user', payload);

  static changePassword = (payload) => api.put('/user/password', payload);
}
