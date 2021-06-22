import { api } from '../index';

export class AppStatusController {
  static getStatuses = () => api.get('/admin/app-status');
}
