/* eslint-disable class-methods-use-this */
const sequalize = require('sequelize');
const { Product, Brand } = require('../models');
const { PRODUCTS_LIMIT, URL } = require('../constants');

class ProductService {
  async getProductsWithCount(config) {
    const productsWithCount = await Product.findAndCountAll({
      attributes: {
        include: [[sequalize.col('brand.name'), 'brand']],
        exclude: ['brandId', 'categoryId', 'images', 'cratedAt', 'updatedAt']
      },
      include: {
        model: Brand,
        attributes: []
      },
      limit: PRODUCTS_LIMIT,
      raw: true,
      ...config
    }).then((data) => {
      const { count, rows } = data;

      const pagesCount = Math.ceil(count / PRODUCTS_LIMIT);
      const products = rows.map((product) => ({
        ...product,
        imageMain: URL(product.imageMain, 'products')
      }));

      return { pagesCount, products };
    });

    return productsWithCount;
  }
}

module.exports = new ProductService();
