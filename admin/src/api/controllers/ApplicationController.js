import { api } from '../index';

export class ApplicationController {
  static getApplications = (payload) =>
    api.get('/admin/application', { params: payload });

  static getPeriod = () => api.get('/admin/application/period');
}
