import { AddProductDomain } from './domain';
import { INFO_CATEGORY1 } from '../constants';
import * as events from './events';
import * as reducers from './reducers';

const initialUnits = [];

const initialImages = [];
const initialInfoValues = INFO_CATEGORY1;
const initialFormValues = {
  name: '',
  brandId: null,
  categoryId: null,
  price: 0,
  count: 1,
  description: '',
  supplierPrice: 0,
};

export const $units = AddProductDomain.store(initialUnits).on(
  events.getUnits.doneData,
  reducers.setUnits,
);

export const $images = AddProductDomain.store(initialImages)
  .on(events.addImages, reducers.addImages)
  .reset(events.addProduct.done);

export const $formValues = AddProductDomain.store(initialFormValues)
  .on(events.changeFormValues, reducers.setFormValue)
  .reset(events.addProduct.done);

export const $infoValues = AddProductDomain.store(initialInfoValues)
  .on(events.changeInfoValues, reducers.setInfoValue)
  .on(events.changeUnitId, reducers.setUnitId)
  .on(events.addInfoItem, reducers.addInfoItem)
  .on(events.deleteInfoItem, reducers.deleteInfoItem)
  .reset(events.addProduct.done);
