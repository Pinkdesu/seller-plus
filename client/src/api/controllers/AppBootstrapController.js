import { api } from '../index';

export class AppBootstrapController {
  static getServices = () => api.get('service');
}
