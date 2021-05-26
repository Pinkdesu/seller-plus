import { BasketDomain } from './domain';
import { combine } from 'effector';
import * as events from './events';
import * as reducers from './reducers';

const initProducts = [];
const initlIsMenuOpen = false;

export const $isMenuOpen = BasketDomain.store(initlIsMenuOpen);

export const $products = BasketDomain.store(initProducts)
  .on(events.addProduct, reducers.addProduct)
  .on(events.deleteProduct, reducers.deleteProduct);

export const $totalPrice = $products.map((state) =>
  state.reduce(
    (result, current) => result + current.price * current.quantity,
    0,
  ),
);

export const $productsCount = $products.map((state) =>
  state.reduce((result, current) => result + current.quantity, 0),
);

export const $basket = combine(
  $products,
  $totalPrice,
  $productsCount,
  (products, totalPrice, productsCount) => ({
    products,
    totalPrice,
    productsCount,
  }),
);
