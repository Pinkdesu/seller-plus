import { CategoryPageDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';
import { FILTERS } from '../constants';
import { combine } from 'effector';

const initialBrands = [];
const initialProducts = [];
const initialPagesCount = 1;
const initialPageNumber = 1;
const initialFilterList = FILTERS;
const initialPriceFilter = {
  min: 0,
  max: 0,
};

export const $productsList = CategoryPageDomain.store(initialProducts)
  .on(events.getProducts.doneData, reducers.setProducts)
  .reset(events.resetProducts);

export const $pagesCount = CategoryPageDomain.store(initialPagesCount)
  .on(events.getProducts.doneData, reducers.setPagesCount)
  .reset(events.resetProducts);

export const $pageNumber = CategoryPageDomain.store(initialPageNumber)
  .on(events.getProducts, (state) => state + 1)
  .on(events.getProducts.fail, (state) => (state > 1 ? state - 1 : state))
  .reset(events.resetProducts);

export const $hasMore = combine(
  $pagesCount,
  $pageNumber,
  (count, number) => count >= number,
);

export const $filterList = CategoryPageDomain.store(initialFilterList).on(
  events.getFilters.doneData,
  reducers.setFilters,
);

export const $priceFilter = CategoryPageDomain.store(initialPriceFilter).on(
  events.getFilters.doneData,
  reducers.setPriceFilter,
);

export const $brandsList = CategoryPageDomain.store(initialBrands);
