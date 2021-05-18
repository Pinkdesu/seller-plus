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

    const { email, password, role = ROLES.USER } = req.body;

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.badRequest('The user is already registered'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      password: hashPassword
    });
    const token = generateAccessToken({
      id: user.id,
      role,
      email
    });

    return res.json({ token, isAuth: true });
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.badRequest('User not found'));
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return next(ApiError.badRequest('Invalid password'));
    }

    const { id, role } = user;
    const token = generateAccessToken({ id, email, role });

    return res.json({ token, isAuth: true });
  }

  async checkAuth(req, res) {
    const { id, email, role } = req.user;
    const token = generateAccessToken({ id, email, role });

    return res.json({ token });
  }
}

module.exports = new UserController();
