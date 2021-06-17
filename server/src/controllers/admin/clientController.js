/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const { Client } = require('../../models/adminPanel');

class ClientController {
  async create(req, res, next) {
    try {
      const { email, ...otherData } = req.body;

      const client = await Client.findOne({ where: { email } });

      if (client) {
        return next(ApiError.badRequest('User already register'));
      }

      const newClient = await Client.create({
        email,
        ...otherData
      });

      return res.json({ client: newClient });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const clients = await Client.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });

      return res.json({ clients });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ClientController();
