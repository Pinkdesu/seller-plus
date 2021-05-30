/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../error/apiError');
const { Basket, BasketProduct, Product } = require('../models');

class BasketController {
  async getProducts(req, res, next) {
    try {
      const { products } = req.query;
      const { user } = req.user;

      const basket = Basket.findOne({ where: { userId: user.id } });

      if (products) {
        const values = JSON.parse(products).map((product) => ({
          basketId: +basket.id,
          productId: +product.id,
          count: +product.count
        }));

        await BasketProduct.destroy({ where: { basketId: basket.id } });
        await BasketProduct.bulkCreate(values);
      }

      const currentBasket = await BasketProduct.findAll(
        { where: { basketId: basket.id }, include: [{ model: Product }] }
      );

      return res.json({ basket: currentBasket });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async addProducts() {

  }
}

module.exports = new BasketController();
