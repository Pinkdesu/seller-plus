import { noAuthApi } from '../index';
import { LIMIT } from '~/features/CategoryPage/constants';

export class ShopController {
  static getCategories = () => noAuthApi.get('/category');

  static getProducts = (paylaod) =>
    noAuthApi.get('/product', { params: { ...paylaod, limit: LIMIT } });

  static getSearchProducts = (payload) =>
    noAuthApi.get('/product/search', { params: { ...payload, limit: LIMIT } });

  static getProductById = (id) => noAuthApi.get(`/product/${id}`);

  static getFilters = (categoryId) =>
    noAuthApi.get(`/product/filter?categoryId=${categoryId}`);

  static getPopularity = () => noAuthApi.get(`/product/popularity`);
}
