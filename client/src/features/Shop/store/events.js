import { ShopDomain } from './domain';
import { ShopController } from '~/api/controllers/ShopController';

export const getCategories = ShopDomain.effect().use(
  ShopController.getCategories,
);
