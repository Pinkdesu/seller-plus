import { BasketDomain } from './domain';
import { BasketController } from '~/api/controllers/BasketController';

export const getBasket = BasketDomain.effect().use(BasketController.getBasket);

export const authAddProduct = BasketDomain.effect().use(
  BasketController.addProduct,
);

export const fillBasket = BasketDomain.effect().use(
  BasketController.fillBasket,
);

export const addProduct = BasketDomain.event();

export const noAuthAddProduct = BasketDomain.event();

export const deleteProduct = BasketDomain.event();

export const openMenu = BasketDomain.event();

export const closeMenu = BasketDomain.event();
