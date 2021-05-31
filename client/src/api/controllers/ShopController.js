import { api } from '../index';

export class ShopController {
  static getCategories = () => api.get('/category');

  static getProductsByCategory = ({ categoryId }) =>
    api.get(`/product?categoryId=${categoryId}`);
}
