import { ProductsDomain } from './domain';
import { INFO } from '../constants';
import * as events from './events';
import * as reducers from './reducers';

const initialUnits = [];
const initialBrands = [];
const initialCategories = [];

const initialImages = [];
const initialInfoValues = INFO;
const initialFormValues = {
  name: '',
  brandId: null,
  categoryId: null,
  price: 0,
  count: 1,
  description: '',
  supplierPrice: 0,
};

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

export const $images = ProductsDomain.store(initialImages)
  .on(events.addImages, reducers.addImages)
  .reset(events.addProduct.done);

export const $formValues = ProductsDomain.store(initialFormValues)
  .on(events.changeFormValues, reducers.setFormValue)
  .reset(events.addProduct.done);

export const $infoValues = ProductsDomain.store(initialInfoValues)
  .on(events.changeInfoValues, reducers.setInfoValue)
  .on(events.changeUnitId, reducers.setUnitId)
  .on(events.addInfoItem, reducers.addInfoItem)
  .on(events.deleteInfoItem, reducers.deleteInfoItem)
  .reset(events.addProduct.done);
