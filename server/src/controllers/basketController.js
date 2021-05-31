/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const { Op } = require('sequelize');
const ApiError = require('../error/apiError');
const { Basket, BasketProduct, Product } = require('../models');

class BasketController {
  async getBasket(req, res, next) {
    try {
      const { id } = req.user;

      const basket = await Basket.findOne({ where: { userId: id } });

      const currentBasket = await BasketProduct.findAll(
        { where: { basketId: basket.id }, include: [{ model: Product }] }
      );

      return res.json({ basket: currentBasket });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async addProduct(req, res, next) {
    try {
      const { id } = req.user;
      const { productId, quantity } = req.body;

      const basket = await Basket.findOne({ where: { userId: id } });
      const [basketProduct, created] = await BasketProduct.findOrCreate({
        where: { [Op.and]: [{ basketId: basket.id }, { productId }] },
        include: [{
          model: Product
        }],
        defaults: {
          productId,
          basketId: basket.id,
          count: quantity
        }
      });

      if (!created) {
        basketProduct.count += quantity;
        await basketProduct.save();
      }

      return res.json({ success: true });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.user;
      const { productId } = req.body;

      const basket = await Basket.findOne({ where: { userId: id } });
      const basketProduct = await BasketProduct.findOne({
        where: { [Op.and]: [{ basketId: basket.id }, { productId }] }
      });

      if (basketProduct.count > 1) {
        basketProduct.count -= 1;
        await basketProduct.save();
      }
      else {
        await basketProduct.destroy();
      }

      return res.json({ success: true });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async fillBasket(req, res, next) {
    try {
      const { id } = req.user;
      const { products } = req.body;

      const userBasket = await Basket.findOne({ where: { userId: id } });

      const correctProducts = JSON.parse(products).map((product) => ({
        basketId: userBasket.id,
        productId: product.id,
        count: product.count
      }));

      await BasketProduct.destroy({ where: { basketId: userBasket.id } });
      await BasketProduct.bulkCreate({ ...correctProducts });

      return res.json();
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
