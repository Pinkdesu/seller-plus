import { api } from '../index';

export class UnitController {
  static getUnits = () => api.get('/admin/unit');
}
