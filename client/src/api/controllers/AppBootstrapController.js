import { api } from '../index';

export class AppBootstrapController {
  static getServices = () => api.get('service');

  static login = ({ email, password }) =>
    api.post('user/login', { data: { email, password } });
}
