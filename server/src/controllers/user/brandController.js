/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Brand } = require('../../models');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });

    return res.json(brand);
  }

  async getAll(req, res, next) {
    try {
      const brands = await Brand.findAll({ raw: true });

      return res.json({ brands });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BrandController();
