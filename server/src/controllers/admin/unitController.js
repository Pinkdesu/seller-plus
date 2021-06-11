/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Unit } = require('../../models');

class UnitController {
  async create(req, res, next) {
    try {
      const { value } = req.body;
      await Unit.create({ value });

      return res.json('success');
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const units = await Unit.findAll({ raw: true });

      return res.json({ units });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UnitController();
