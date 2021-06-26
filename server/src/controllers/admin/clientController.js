/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const { Op } = require('sequelize');
const ApiError = require('../../error/apiError');
const clientService = require('../../services/clientService');
const { Client } = require('../../models');

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
      const { clientCategoryId, searchName, page: defPage } = req.query;

      const page = defPage > 0 ? defPage : 1;
      const offset = page * 20 - 20;

      let clientsWithCount;

      if (!clientCategoryId && !searchName) {
        clientsWithCount = await clientService.getClietns({ offset });
      }

      if (clientCategoryId && !searchName) {
        clientsWithCount = await clientService.getClietns({
          where: { clientCategoryId },
          offset
        });
      }

      if (!clientCategoryId && searchName) {
        clientsWithCount = await clientService.getClietns({
          where: {
            [Op.or]: {
              name: {
                [Op.iLike]: `%${searchName}%`
              },
              companyName: {
                [Op.iLike]: `%${searchName}%`
              }
            }
          },
          offset
        });
      }

      if (clientCategoryId && searchName) {
        clientsWithCount = await clientService.getClietns({
          where: {
            [Op.and]: {
              [Op.or]: {
                name: {
                  [Op.iLike]: `%${searchName}%`
                },
                companyName: {
                  [Op.iLike]: `%${searchName}%`
                }
              },
              clientCategoryId
            }
          },
          offset
        });
      }

      return res.json(clientsWithCount);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ClientController();
