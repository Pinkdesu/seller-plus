/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const { Op, col } = require('sequelize');
const ApiError = require('../../error/apiError');
const {
  Basket, BasketProduct, Product, Brand
} = require('../../models');

const { URL } = require('../../constants');

class BasketController {
  async getBasket(req, res, next) {
    try {
      const { id } = req.user;

      const basket = await Basket.findOne({ where: { userId: id } });

      const currentBasket = await BasketProduct.findAll(
        {
          where: { basketId: basket.id },
          attributes: [
            ['productId', 'id'],
            ['count', 'quantity'],
            [col('product.name'), 'name'],
            [col('product.price'), 'price'],
            [col('product.brand.name'), 'brand'],
            [col('product.imageMain'), 'imageMain']
          ],
          include: {
            model: Product,
            attributes: [],
            include: {
              model: Brand,
              attributes: []
            }
          },
          raw: true
        }
      ).then((data) => data.map((item) => ({
        ...item,
        imageMain: URL(item.imageMain, 'products')
      })));

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
      const { productId } = req.query;

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
      const values = JSON.parse(products).map((product) => ({
        basketId: userBasket.id,
        productId: product.id,
        count: product.count
      }));

      await BasketProduct.destroy({ where: { basketId: userBasket.id } });
      await BasketProduct.bulkCreate(values);

      return res.json({ success: true });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
