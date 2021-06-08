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
      const { id: userId } = req.user;
      const { region, city, otherAddress } = req.body;

      const basket = await Basket.findOne({ where: { userId } });
      const basketProducts = await BasketProduct.findAll({
        where: { basketId: basket.id },
        attributes: ['count'],
        include: {
          model: Product,
          as: 'product'
        }
      });

      const totalPrice = basketProducts.reduce((sum, basketProduct) => {
        const { count, product } = basketProduct.dataValues;
        return sum + count * product.price;
      }, 0);

      const order = await Order.create({
        userId,
        region,
        city,
        otherAddress,
        totalPrice,
        orderStatusId: 1
      });

      basketProducts.forEach((basketProduct) => {
        const { count, product } = basketProduct.dataValues;
        const { id: productId, count: currentCount } = product.dataValues;

        const remainingProduct = currentCount - count;

        OrderProduct.create({ orderId: order.id, productId, count });
        Product.update({ count: remainingProduct }, { where: { id: productId } });
      });

      BasketProduct.destroy({ where: { basketId: basket.id } });

      return res.json({ status: 'success' });
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
