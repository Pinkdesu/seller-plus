/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const path = require('path');
const ApiError = require('../error/apiError');
const createFileName = require('../utils/createFileName');
const { Product } = require('../models');

class ProductController {
  async create(req, res, next) {
    try {
      const {
        name,
        price,
        brandId,
        categoryId,
        info
      } = req.body;
      const { image } = req.files;

      const fileName = createFileName(image);
      image.mv(path.resolve(__dirname, '../../', 'static', fileName));

      const product = await Product.create({
        image: fileName,
        info,
        name,
        price,
        brandId,
        categoryId
      });

      return res.json(product);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {

  }

  async getOne(req, res) {

  }
}

module.exports = new ProductController();
