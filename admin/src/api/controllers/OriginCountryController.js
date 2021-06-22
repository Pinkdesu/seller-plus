import { api } from '../index';

export class OriginCountryController {
  static getCountries = () => api.get('/admin/origin-country');
}
