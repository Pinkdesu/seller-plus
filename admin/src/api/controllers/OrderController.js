import { api } from '../index';

export class OrderController {
  static getPeriod = () => api.get('/order/period/all');
}
