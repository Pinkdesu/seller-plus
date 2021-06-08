/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const {
  Order, OrderProduct, BasketProduct, Basket, Product
} = require('../../models');

class ProductController {
  async create(req, res, next) {
    try {
      const { id } = req.user;
      const { region, city, otherAddress } = req.body;

      const basket = await Basket.findOne({ where: { userId: id } });
      const products = await BasketProduct.findAll({
        where: { basketId: basket.id },
        attributes: ['count'],
        include: {
          model: Product,
          attributes: ['id', 'price']
        }
      });

      console.log(products);

      return res.json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      return res.json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      return res.json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductController();
