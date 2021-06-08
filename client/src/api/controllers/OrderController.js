import { api } from '../index';

export class OrderController {
  static getOrders = () => api.get('/order');

  static addOrder = (payload) => api.post('/order', payload);
}
