import { ShopDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

import { DEFAULT_CATEGORIES } from '../constants';

const initialCategories = DEFAULT_CATEGORIES;
const initialIsCategories = false;
const initialProducts = [];
const initialProduct = {
  images: [],
  info: [],
};

export const $product = ShopDomain.store(initialProduct)
  .on(events.getProductById.doneData, reducers.setProduct)
  .reset(events.resetProduct);

export const $categoriesList = ShopDomain.store(initialCategories).on(
  events.getCategories.doneData,
  reducers.setCategories,
);

export const $isCategories = ShopDomain.store(initialIsCategories).on(
  events.getCategories.doneData,
  () => true,
);

export const $popularProductsList = ShopDomain.store(initialProducts).on(
  events.getPopularity.doneData,
  reducers.setPopularity,
);
