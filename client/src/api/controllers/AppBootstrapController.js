import { api, noAuthApi } from '../index';

export class AppBootstrapController {
  static getServices = () => noAuthApi.get('/service');

  static login = ({ email, password }) =>
    api.post('/user/login', { email, password });

  static logout = () => api.post('/user/logout');

  static refreshAuth = () => noAuthApi.get('/user/refresh');

  static register = (payload) => api.post('/user/register', payload);

  static updateUser = (payload) => api.put('/user', payload);

  static changePassword = (payload) => api.put('/user/password', payload);
}
