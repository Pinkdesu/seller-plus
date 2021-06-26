/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Invoice, Product, InvoiceProduct } = require('../../models');

class InvoiceController {
  async create(req, res, next) {
    try {
      const {
        employeeId,
        supplierDate,
        number,
        products
      } = req.body;

      const parsedProducts = JSON.parse(products);

      const invoice = await Invoice.create({
        employeeId,
        supplierDate,
        number
      });

      parsedProducts.forEach((current) => {
        const { productId, supplierPrice, count } = current;

        InvoiceProduct.create({
          invoiceId: invoice.id,
          productId,
          supplierPrice,
          count
        });

        Product.increment('count', { by: count, where: { id: productId } });
      });

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getPeriod(_, res, next) {
    try {
      const from = await Invoice.min('supplierDate');
      const to = await Invoice.max('supplierDate');

      return res.json({ from, to });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new InvoiceController();
