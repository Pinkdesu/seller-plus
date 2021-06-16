/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Client } = require('../../models/adminPanel');

class ClientController {
  async create(req, res, next) {
    try {
      const { value } = req.body;

      return res.json(value);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ClientController();
