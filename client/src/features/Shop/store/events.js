import { ShopDomain } from './domain';
import { ShopController } from '~/api/controllers/ShopController';

export const getCategories = ShopDomain.effect().use(
  ShopController.getCategories,
);

export const getProductsByCategory = ShopDomain.effect().use(
  ShopController.getProductsByCategory,
);

export const getProductById = ShopDomain.effect().use(
  ShopController.getProductById,
);

export const resetProduct = ShopDomain.event();
