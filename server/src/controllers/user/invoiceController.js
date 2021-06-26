/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Invoice, Product } = require('../../models');

class InvoiceController {
  async create(req, res, next) {
    try {
      const {
        supplierDate,
        number,
        products
      } = req.body;

      return res.json({ });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new InvoiceController();
