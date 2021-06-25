/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { validationResult } = require('express-validator');
const createUserResponse = require('../../utils/createUserResponse');
const ApiError = require('../../error/apiError');
const mailService = require('../../services/mailService');
const tokenService = require('../../services/tokenService');
const { User, Basket } = require('../../models');
const { URL } = require('../../constants');

const MAX_AGE = 30 * 24 * 60 * 60 * 1000;

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
      const activationLink = uuid.v4();

      const user = await User.create({
        email,
        firstName,
        secondName,
        activationLink,
        password: hashPassword
      });

      await Basket.create({ userId: user.id });
      await mailService.sendActivationMail(
        email,
        URL(activationLink, 'api/user/activate')
      );
      // TODO: take out
      const userData = createUserResponse(user.dataValues);
      const tokens = tokenService.generateTokens(userData);
      await tokenService.saveToken(userData.id, tokens.refreshToken);
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: MAX_AGE,
        httpOnly: true
      });

      return res.json({ user: userData, ...tokens });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return next(ApiError.badRequest('User not found'));
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return next(ApiError.badRequest('Invalid password'));
      }

      const userData = createUserResponse(user.dataValues);
      const tokens = tokenService.generateTokens(userData);
      await tokenService.saveToken(userData.id, tokens.refreshToken);
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: MAX_AGE,
        httpOnly: true
      });

      return res.json({ user: userData, ...tokens });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      await tokenService.removeToken(refreshToken);

      res.clearCookie('refreshToken');

      return res.status(200).json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async activateAccount(req, res, next) {
    try {
      const { link } = req.params;

      const user = await User.findOne({
        where: {
          activationLink: link
        }
      });

      if (!user) {
        return next(ApiError.badRequest('Invalid link'));
      }

      user.isActivated = true;
      await user.save();

      return res.redirect(process.env.CLIENT_URL);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      if (!refreshToken) {
        return next(ApiError.unauthorized('Empty token'));
      }

      const tokenData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await tokenService.findToken(refreshToken);

      if (!tokenData || !tokenFromDb) {
        return next(ApiError.unauthorized('Token data error'));
      }

      const user = await User.findOne({
        where: { id: tokenData.id }
      });

      const userData = createUserResponse(user.dataValues);
      const tokens = tokenService.generateTokens(userData);
      await tokenService.saveToken(userData.id, tokens.refreshToken);
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: MAX_AGE,
        httpOnly: true
      });

      return res.json({ user: userData, ...tokens });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async updateUserInfo(req, res, next) {
    try {
      const { id } = req.user;
      const {
        firstName,
        secondName,
        email,
        phone,
        address
      } = req.body;

      const info = {
        firstName,
        secondName,
        email,
        phone,
        address
      };

      if (email) {
        info.isActivated = false;
        info.activationLink = uuid.v4();

        await mailService.sendActivationMail(
          email,
          URL(info.activationLink, 'api/user/activate')
        );
      }

      const updatedUser = await User.update(info, {
        where: { id }, returning: true, plain: true
      });

      const userData = createUserResponse(updatedUser[1].dataValues);
      const tokens = tokenService.generateTokens(userData);
      await tokenService.saveToken(userData.id, tokens.refreshToken);
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: MAX_AGE,
        httpOnly: true
      });

      return res.json({ user: userData, ...tokens });
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

      const userData = createUserResponse(updatedUser.dataValues);
      const tokens = tokenService.generateTokens(userData);
      await tokenService.saveToken(userData.id, tokens.refreshToken);
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: MAX_AGE,
        httpOnly: true
      });

      return res.json({ user: userData, ...tokens });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();
