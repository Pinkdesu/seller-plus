/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const generateAccessToken = require('../../utils/generateAccessToken');
const ApiError = require('../../error/apiError');
const { User } = require('../../models');
const { ROLES } = require('../../constants');

class UserController {
  async login(req, res, next) {
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
}

module.exports = new UserController();
