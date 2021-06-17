import { ProductsDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialBrands = [];
const initialProducts = [];
const initialCategories = [];

export const $brands = ProductsDomain.store(initialBrands).on(
  events.getBrands.doneData,
  reducers.setBrands,
);

export const $products = ProductsDomain.store(initialProducts).on(
  events.getProducts.doneData,
  reducers.setProducts,
);

export const $categories = ProductsDomain.store(initialCategories).on(
  events.getCategories.doneData,
  reducers.setCategories,
);
