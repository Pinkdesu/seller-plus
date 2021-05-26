import { api } from '../index';

export class ShopController {
  static getCategories = () => api.get('category');
}
