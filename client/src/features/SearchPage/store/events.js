import { SearchPageDomain } from './domain';
import { ShopController } from '~/api/controllers/ShopController';

export const getSearchProducts = SearchPageDomain.effect().use(
  ShopController.getSearchProducts,
);

export const resetSearchProducts = SearchPageDomain.event();
