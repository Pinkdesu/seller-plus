import { api } from '../index';

export class ClientController {
  static getClients = (payload) =>
    api.get('/admin/client', { params: payload });

  static addClient = (payload) => api.post('/admin/client', payload);
}
