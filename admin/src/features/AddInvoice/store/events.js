import { AddInvoiceDomain } from './domain';
import { InvoiceController } from '~/api/controllers/InvoiceController';

export const addInvoice = AddInvoiceDomain.effect().use(
  InvoiceController.addInvoice,
);

export const changeFormValues = AddInvoiceDomain.event();

export const addProduct = AddInvoiceDomain.event();

export const deleteProduct = AddInvoiceDomain.event();

export const changeProductValue = AddInvoiceDomain.event();
