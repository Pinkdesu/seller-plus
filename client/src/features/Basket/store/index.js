import { BasketDomain } from './domain';
import { combine, guard, sample, split } from 'effector';
import { login, register } from '~/features/AppBootstrap/store/events';
import { $isAuth } from '~/features/AppBootstrap/store';
import * as events from './events';
import * as reducers from './reducers';

const initProducts = [];
const initlIsMenuOpen = false;

export const $isMenuOpen = BasketDomain.store(initlIsMenuOpen)
  .on(
    [events.noAuthAddProduct, events.authAddProduct.done, events.openMenu],
    () => true,
  )
  .on(events.closeMenu, () => false);

export const $products = BasketDomain.store(initProducts)
  .on(
    [events.noAuthAddProduct, events.authAddProduct.done],
    reducers.addProduct,
  )
  .on(events.deleteProduct, reducers.deleteProduct)
  .on(events.fillBasket, reducers.setBasket);

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

sample({
  clock: [login.done, register.done],
  source: $products,
  fn: (products) => {
    if (!products.length) return;

    return products.map((product) => ({
      id: product.id,
      count: product.count,
    }));
  },
  target: events.fillBasket,
});

split({
  source: events.addProduct,
  match: {
    isAuth: $isAuth,
    noAuth: () => true,
  },
  cases: {
    isAuth: events.authAddProduct,
    noAuth: events.noAuthAddProduct,
  },
});
