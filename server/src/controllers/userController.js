/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const generateAccessToken = require('../utils/generateAccessToken');
const ApiError = require('../error/apiError');
const { User } = require('../models');
const { ROLES } = require('../constants');

class UserController {
  async registration(req, res, next) {
    const errors = validationResult(req);

    if (errors.length) {
      return next(ApiError.badRequest(errors));
    }

    const {
      email, password, firstName, secondName, role = ROLES.USER
    } = req.body;

    const candidate = await User.findOne({ raw: true, where: { email } });

    if (candidate) {
      return next(ApiError.badRequest('The user is already registered'));
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({
      role,
      email,
      firstName,
      secondName,
      password: hashPassword
    });

    const { password: _, ...userData } = user.getDataValue();
    const token = generateAccessToken(userData);

    return res.json({ token });
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);

      if (errors.length) {
        throw new Error(errors);
      }

      const { email, password } = req.body.data;

      const user = await User.findOne({ raw: true, where: { email } });

      if (!user) {
        return next(ApiError.badRequest('User not found'));
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return next(ApiError.badRequest('Invalid password'));
      }

      const { password: _, ...userData } = user;
      const token = generateAccessToken(userData);

      return res.json({ token });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async checkAuth(req, res, next) {
    try {
      const { exp, iat, ...userData } = req.user;
      const token = generateAccessToken(userData);
      return res.json({ token });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();
