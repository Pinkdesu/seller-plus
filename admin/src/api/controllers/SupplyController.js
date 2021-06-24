import { api } from '../index';

export class SupplyController {
  static getPeriod = () => api.get('/admin/supply/period');
}
