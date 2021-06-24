/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Supply } = require('../../models');

class SupplyController {
  async getPeriod(_, res, next) {
    try {
      const from = await Supply.min('supplierDate');
      const to = await Supply.max('supplierDate');

      return res.json({ from, to });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new SupplyController();
