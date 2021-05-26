import { BasketDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initBasket = {
  productsCount: 0,
  products: [],
};

export const $basket = BasketDomain.store(initBasket)
  .on(events.addProduct, reducers.addProduct)
  .on(events.deleteProduct, reducers.deleteProduct);
