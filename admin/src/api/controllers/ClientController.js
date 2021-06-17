import { api } from '../index';

export class ClientController {
  static getClients = (payload) =>
    api.get('/admin/client', { params: payload });
}
