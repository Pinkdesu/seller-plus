import { AddInvoiceDomain } from './domain';
import { InvoiceController } from '~/api/controllers/InvoiceController';
import { ProductController } from '~/api/controllers/ProductController';

export const addInvoice = AddInvoiceDomain.effect().use(
  InvoiceController.addInvoice,
);

export const getSearchProducts = AddInvoiceDomain.effect().use(
  ProductController.getSearchProducts,
);

export const changeFormValues = AddInvoiceDomain.event();

export const addProduct = AddInvoiceDomain.event();

export const deleteProduct = AddInvoiceDomain.event();

export const changeProductValue = AddInvoiceDomain.event();
