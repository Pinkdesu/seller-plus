import { api } from '../index';

export class AppBootstrapController {
  static getServices = () => api.get('/service');

  static login = ({ email, password }) =>
    api.post('/admin/login', { email, password });

  static getEmployees = () => api.get('/admin');
}
