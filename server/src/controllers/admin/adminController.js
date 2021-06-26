/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const generateAccessToken = require('../../utils/generateAccessToken');
const ApiError = require('../../error/apiError');
const { Employee } = require('../../models');
const { ROLES } = require('../../constants');

class EmployeeController {
  async create(req, res, next) {
    try {
      const {
        name, email, password, positionId
      } = req.body;

      const employee = await Employee.findOne({ where: { email } });

      if (employee) {
        return next(ApiError.badRequest('User already register'));
      }

      const hashPassword = await bcrypt.hash(password, 5);

      const newEmployee = await Employee.create({
        name,
        email,
        positionId,
        role: ROLES.ADMIN,
        password: hashPassword
      });

      return res.json({ newEmployee });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await Employee.findOne({ raw: true, where: { email } });

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

  async getAll(_, res, next) {
    try {
      const employees = await Employee.findAll();

      return res.json({ employees });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new EmployeeController();
