import { BasketDomain } from './domain';
import { combine, guard } from 'effector';
import * as events from './events';
import * as reducers from './reducers';

const initProducts = [];
const initlIsMenuOpen = false;

export const $isMenuOpen = BasketDomain.store(initlIsMenuOpen)
  .on([events.addProduct, events.openMenu], () => true)
  .on(events.closeMenu, () => false);

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

guard({
  clock: events.deleteProduct,
  source: $productsCount,
  filter: (count) => count === 0,
  target: events.closeMenu,
});
