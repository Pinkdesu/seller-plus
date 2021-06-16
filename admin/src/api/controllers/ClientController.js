import { api } from '../index';

export class ClientController {
  static getClients = () => api.get('/admin/client');
}
