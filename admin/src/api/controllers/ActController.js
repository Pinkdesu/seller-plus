import { api } from '../index';

export class ActController {
  static getActs = (payload) => api.get('/admin/act', { params: payload });
}
