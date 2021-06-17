import { api } from '../index';

export class ApplicationController {
  static getApplications = (payload) =>
    api.get('/admin/application', { params: payload });
}
