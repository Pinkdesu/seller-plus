/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { ApplicationTheme } = require('../../models/adminPanel');

class AppThemeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;

      await ApplicationTheme.create({ name });

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const themes = await ApplicationTheme.findAll();

      return res.json({ themes });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new AppThemeController();
