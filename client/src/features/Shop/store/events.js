import { ShopDomain } from './domain';
import { ShopController } from '~/api/controllers/ShopController';

export const getCategories = ShopDomain.effect().use(
  ShopController.getCategories,
);

export const getProductById = ShopDomain.effect().use(
  ShopController.getProductById,
);

export const getPopularity = ShopDomain.effect().use(
  ShopController.getPopularity,
);

export const resetProduct = ShopDomain.event();
