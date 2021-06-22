/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { OriginCountry } = require('../../models');

class OriginCountryController {
  async create(req, res, next) {
    try {
      const { value } = req.body;
      await OriginCountry.create({ value });

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const countries = await OriginCountry.findAll();

      return res.json({ countries });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new OriginCountryController();
