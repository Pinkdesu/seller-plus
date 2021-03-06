import { api } from '../index';

export class InvoiceController {
  static addInvoice = (payload) =>
    api.post('/admin/invoice', {
      ...payload,
      products: JSON.stringify(payload.products),
    });

  static getPeriod = () => api.get('/admin/invoice/period');
}
