import { BasketDomain } from './domain';
import { combine, guard, split } from 'effector';
import { auth, logOut } from '~/features/AppBootstrap/store/events';
import { addOrder } from '~/features/PaymentPage/store/events';
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
  .on(
    [events.noAuthDeleteProduct, events.authDeleteProduct.done],
    reducers.deleteProduct,
  )
  .on(events.getBasket.done, reducers.setBasket)
  .reset([logOut, addOrder.done]);

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
  clock: [events.noAuthDeleteProduct, events.authDeleteProduct.done],
  source: $productsCount,
  filter: (count) => count === 0,
  target: events.closeMenu,
});

guard({
  clock: auth,
  source: $products,
  filter: (products) => products.length > 0,
  target: events.fillBasket,
});

guard({
  clock: auth,
  source: $products,
  filter: (products) => products.length === 0,
  target: events.getBasket,
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

split({
  source: events.deleteProduct,
  match: {
    isAuth: $isAuth,
    noAuth: () => true,
  },
  cases: {
    isAuth: events.authDeleteProduct,
    noAuth: events.noAuthDeleteProduct,
  },
});
