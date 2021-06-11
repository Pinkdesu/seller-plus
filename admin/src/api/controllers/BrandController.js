import { api } from '../index';

export class BrandController {
  static getBrands = () => api.get('/brand');
}
