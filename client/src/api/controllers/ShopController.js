import { api } from '../index';

export class ShopController {
  static getCategories = () => api.get('/category');

  static getProductsByCategory = ({ categoryId }) =>
    api.get(`/product?categoryId=${categoryId}`);

  static getProductById = (id) => api.get(`/product/${id}`);

  static getFilters = () => api.get(`/product/filter`);
}
