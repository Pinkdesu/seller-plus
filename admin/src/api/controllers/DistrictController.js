import { api } from '../index';

export class DistrictController {
  static getDistricts = () => api.get('/admin/city-district');
}
