/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const generateAccessToken = require('../../utils/generateAccessToken');
const ApiError = require('../../error/apiError');
const { User, Basket } = require('../../models');
const { ROLES } = require('../../constants');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (errors.length) {
        return next(ApiError.badRequest(errors));
      }

      const {
        email,
        firstName,
        secondName,
        password,
        repeatPassword
      } = req.body;

      const candidate = await User.findOne({ where: { email } });

      if (candidate) {
        return next(ApiError.badRequest('The user is already registered'));
      }

      if (password !== repeatPassword) {
        return next(ApiError.badRequest('Passwords do not match'));
      }

      const hashPassword = await bcrypt.hash(password, 5);

      const user = await User.create({
        email,
        firstName,
        secondName,
        role: ROLES.USER,
        password: hashPassword
      });
      await Basket.create({ userId: user.id });

      const { password: _, ...userData } = user.dataValues;
      const token = generateAccessToken(userData);

      return res.json({ token });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

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

  async adminLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ raw: true, where: { email } });

      if (!user) {
        return next(ApiError.badRequest('User not found'));
      }

      if (user.role !== ROLES.ADMIN) {
        return next(ApiError.forbidden('No access'));
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
      const { id } = req.user;

      const user = await User.findOne({ raw: true, where: { id } });

      if (!user) {
        return next(ApiError.badRequest('User not found'));
      }

      const token = generateAccessToken(user);

      return res.json({ token });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async updateUserInfo(req, res, next) {
    try {
      const { id } = req.user;
      const {
        firstName, secondName, email, phone
      } = req.body;

      const updatedUser = await User.update(
        {
          firstName, secondName, email, phone
        },
        {
          where: { id }, returning: true, plain: true
        }
      );

      const { password: _, ...userData } = updatedUser[1].dataValues;
      const token = generateAccessToken(userData);

      return res.json({ token });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async changePassword(req, res, next) {
    try {
      const { id } = req.user;
      const {
        currentPassword, newPassword, repeatNewPassword
      } = req.body;

      if (newPassword !== repeatNewPassword) {
        return next(ApiError.badRequest("The password doesn't match"));
      }

      const user = await User.findOne({ where: { id } });

      const validPassword = bcrypt.compareSync(currentPassword, user.password);

      if (!validPassword) {
        return next(ApiError.badRequest('Invalid password'));
      }

      const hashNewPassword = await bcrypt.hash(newPassword, 5);

      user.password = hashNewPassword;

      const updatedUser = await user.save();

      const { password: _, ...userData } = updatedUser.dataValues;

      const token = generateAccessToken(userData);

      return res.json({ token });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();
