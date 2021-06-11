import { ProductsDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialUnits = [];
const initialBrands = [];
const initialCategories = [];

export const $units = ProductsDomain.store(initialUnits).on(
  events.getUnits.doneData,
  reducers.setUnits,
);

export const $brands = ProductsDomain.store(initialBrands).on(
  events.getBrands.doneData,
  reducers.setBrands,
);

export const $categories = ProductsDomain.store(initialCategories).on(
  events.getCategories.doneData,
  reducers.setCategories,
);
