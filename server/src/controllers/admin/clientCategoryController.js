/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { ClientCategory } = require('../../models/adminPanel');

class ClientCategoryController {
  async create(req, res, next) {
    try {
      const { name } = req.body;

      await ClientCategory.create({ name });

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const categories = await ClientCategory.findAll();

      return res.json({ categories });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ClientCategoryController();
