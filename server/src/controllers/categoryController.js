/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../error/apiError');

const { Category } = require('../models');

class CategoryController {
  async create(req, res) {
    const { name, image } = req.body;
    const category = await Category.create({ name, image });

    return res.json(category);
  }

  async getAll(req, res) {

  }
}

module.exports = new CategoryController();
