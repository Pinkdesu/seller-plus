import { ShopDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

import { PRODUCTS } from '../constants';

const initialCategories = [];
const initialProducts = [...PRODUCTS];
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

export const $popularProductsList = ShopDomain.store(initialProducts);
