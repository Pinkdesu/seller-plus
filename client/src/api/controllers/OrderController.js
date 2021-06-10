import { api } from '../index';

export class OrderController {
  static getOrders = () => api.get('/order');

  static getOrderById = (id) => api.get(`/order/${id}`);

  static addOrder = (payload) => api.post('/order', payload);
}
