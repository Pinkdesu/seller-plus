import { api } from '../index';
import ls from 'store2';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';
import { setToken } from '~/api';

export class AppBootstrapController {
  static getServices = () => api.get('/service');

  static login = ({ email, password }) =>
    api.post('/user/login', { data: { email, password } });

  static checkAuth = () => {
    return api.get('/user/auth');
  };

  static register = (payload) =>
    api.post('/user/register', {
      data: payload,
    });

  static updateUser = (payload) =>
    api.put('/user', {
      data: payload,
    });

  static changePassword = (payload) =>
    api.put('/user/password', {
      data: payload,
    });

  static init = () => {
    setToken(ls(LOCAL_STORAGE_TOKENS_KEY));
    return Promise.all([this.checkAuth(), this.getServices()]).then((data) =>
      data.reduce(
        (result, current) => ({
          ...result,
          ...current.data,
        }),
        {},
      ),
    );
  };
}
