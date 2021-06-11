import { api } from '../index';

export class CategoryController {
  static getCategories = () => api.get('/category');
}
