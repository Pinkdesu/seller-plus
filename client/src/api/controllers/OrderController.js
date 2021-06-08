import { api } from '../index';

export class OrderController {
  static getOrders = () => api.get('/order');

  static getProductsByCategory = (payload) => api.post('/order', payload);
}
