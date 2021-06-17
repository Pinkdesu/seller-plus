/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Position } = require('../../models/adminPanel');

class PositionController {
  async create(req, res, next) {
    try {
      const { name } = req.body;

      await Position.create({ name });

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new PositionController();
