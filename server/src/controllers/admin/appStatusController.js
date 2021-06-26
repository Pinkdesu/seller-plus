/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { ApplicationStatus } = require('../../models');

class AppStatusController {
  async create(req, res, next) {
    try {
      const { name } = req.body;

      await ApplicationStatus.create({ name });

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const statuses = await ApplicationStatus.findAll();

      return res.json({ statuses });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new AppStatusController();
