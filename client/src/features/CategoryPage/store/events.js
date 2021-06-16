import { CategoryPageDomain } from './domain';
import { ShopController } from '~/api/controllers/ShopController';

export const getProducts = CategoryPageDomain.effect().use(
  ShopController.getProducts,
);

export const getFilters = CategoryPageDomain.effect().use(
  ShopController.getFilters,
);

export const resetProducts = CategoryPageDomain.event();
