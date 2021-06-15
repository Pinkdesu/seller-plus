import { noAuthApi } from '../index';

export class ShopController {
  static getCategories = () => noAuthApi.get('/category');

  static getProductsByCategory = ({ categoryId }) =>
    noAuthApi.get(`/product?categoryId=${categoryId}`);

  static getProductById = (id) => noAuthApi.get(`/product/${id}`);

  static getFilters = () => noAuthApi.get(`/product/filter`);
}
