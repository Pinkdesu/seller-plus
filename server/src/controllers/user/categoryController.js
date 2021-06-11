/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Category } = require('../../models');
const { URL } = require('../../constants');

class CategoryController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const { image } = req.files;

      const fileName = moveFile(image);
      const category = await Category.create({ name, image: fileName });

      return res.json(category);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const categories = await Category.findAll({ raw: true });

      const categoriesWithUrl = categories.map((category) => ({
        ...category,
        image: URL(category.image)
      }));

      return res.json({ categories: categoriesWithUrl });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async deleteOne(req, res) {
    const { id } = req.query;

    const category = await Category.destroy({ where: { id } });

    return res.json(category);
  }
}

module.exports = new CategoryController();
