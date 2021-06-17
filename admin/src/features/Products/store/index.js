import { ProductsDomain } from './domain';
import { combine } from 'effector';
import * as events from './events';
import * as reducers from './reducers';

const initialBrands = [];
const initialProducts = [];
const initialPagesCount = 1;
const initialPageNumber = 1;
const initialCategories = [];

export const $brands = ProductsDomain.store(initialBrands).on(
  events.getBrands.doneData,
  reducers.setBrands,
);

export const $products = ProductsDomain.store(initialProducts)
  .on(events.getProducts.doneData, reducers.setProducts)
  .reset(events.resetProducts);

export const $pagesCount = ProductsDomain.store(initialPagesCount)
  .on(events.getProducts.doneData, reducers.setPagesCount)
  .reset(events.resetProducts);

export const $pageNumber = ProductsDomain.store(initialPageNumber)
  .on(events.getProducts, (state) => state + 1)
  .on(events.getProducts.fail, (state) => (state > 1 ? state - 1 : state))
  .reset(events.resetProducts);

export const $hasMore = combine(
  $pagesCount,
  $pageNumber,
  (count, number) => count >= number,
);

export const $categories = ProductsDomain.store(initialCategories).on(
  events.getCategories.doneData,
  reducers.setCategories,
);
