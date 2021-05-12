/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../error/apiError');

class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async checkAuth(req, re, next) {
    if (!req.query.id) {
      next(ApiError.badRequest);
    }
  }
}

module.exports = new UserController();
