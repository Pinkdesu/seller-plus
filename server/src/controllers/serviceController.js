/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../error/apiError');
const moveFile = require('../utils/moveFile');
const { Service } = require('../models');

class ServiceController {
  async create(req, res, next) {
    try {
      const {
        name,
        price,
        title,
        description
      } = req.body;
      const { image } = req.files;

      const fileName = moveFile(image);
      const service = await Service.create({
        image: fileName,
        name,
        price,
        title,
        description
      });

      return res.json(service);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const services = await Service.findAll();

    return res.json(services);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const services = await Service.findOne({
      where: { id }
    });

    return res.json(services);
  }
}

module.exports = new ServiceController();
