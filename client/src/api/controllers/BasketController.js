import { api } from '../index';

export class BasketController {
  static getBasket = () => api.get('/basket');

  static addProduct = ({ id, quantity }) =>
    api.post('/basket/product', {
      productId: id,
      quantity,
    });

  static deleteProduct = (productId) =>
    api.delete('/basket/product', { params: { productId } });

  static fillBasket = (products) =>
    api.post('/basket/products', {
      products,
    });
}
