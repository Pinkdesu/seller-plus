import { AddInvoiceDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';
import { PRODUCT } from '../constants';

const initialProducts = [{ ...PRODUCT }];
const initialSearchProducts = [];
const initialFormValues = {
  number: '',
  employeeId: null,
  supplierDate: '',
};

export const $formValues = AddInvoiceDomain.store(initialFormValues)
  .on(events.changeFormValues, reducers.setFormValue)
  .reset(events.addInvoice.done);

export const $products = AddInvoiceDomain.store(initialProducts)
  .on(events.changeProductValue, reducers.setProductValue)
  .on(events.addProduct, reducers.addProduct)
  .on(events.deleteProduct, reducers.deleteProduct)
  .reset(events.addInvoice.done);

export const $searchProducts = AddInvoiceDomain.store(initialSearchProducts)
  .on(events.getSearchProducts.doneData, reducers.setSearchProducts)
  .reset(events.addInvoice.done);
