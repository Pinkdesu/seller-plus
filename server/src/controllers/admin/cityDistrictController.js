/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { CityDistrict } = require('../../models/adminPanel');

class CityDistrictController {
  async create(req, res, next) {
    try {
      const { name } = req.body;

      await CityDistrict.create({ name });

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const districts = await CityDistrict.findAll();

      return res.json({ districts });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new CityDistrictController();
