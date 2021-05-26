import { ShopDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

import { PRODUCTS } from '../constants';

const initialCategories = [];
const initialBrands = [];
const initialProducts = [...PRODUCTS];

export const $categoriesList = ShopDomain.store(initialCategories).on(
  events.getCategories.done,
  reducers.setCategories,
);

export const $brandsList = ShopDomain.store(initialBrands);

export const $productsList = ShopDomain.store(initialProducts);
