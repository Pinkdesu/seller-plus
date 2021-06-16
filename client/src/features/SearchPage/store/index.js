import { SearchPageDomain } from './domain';
import * as events from './events';
import {
  setProducts,
  setPagesCount,
} from '~/features/CategoryPage/store/reducers';
import { combine } from 'effector';

const initialProducts = [];
const initialPagesCount = 1;
const initialPageNumber = 1;

export const $productsList = SearchPageDomain.store(initialProducts)
  .on(events.getSearchProducts.doneData, setProducts)
  .reset(events.resetSearchProducts);

export const $pagesCount = SearchPageDomain.store(initialPagesCount)
  .on(events.getSearchProducts.doneData, setPagesCount)
  .reset(events.resetSearchProducts);

export const $pageNumber = SearchPageDomain.store(initialPageNumber)
  .on(events.getSearchProducts, (state) => state + 1)
  .on(events.getSearchProducts.fail, (state) => (state > 1 ? state - 1 : state))
  .reset(events.resetSearchProducts);

export const $hasMore = combine(
  $pagesCount,
  $pageNumber,
  (count, number) => count >= number,
);
