/* eslint-disable class-methods-use-this */
const { col } = require('sequelize');
const {
  Brand, Product, ProductInfo, Unit
} = require('../models');
const { PRODUCTS_LIMIT, URL } = require('../constants');

class ProductService {
  async getProductsWithCount(config) {
    const productsWithCount = await Product.findAndCountAll({
      attributes: {
        include: [[col('brand.name'), 'brand']],
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

  async getOneProduct(id) {
    const product = await Product.findOne({
      where: { id },
      attributes: {
        include: [
          'name',
          'description',
          'count',
          'price',
          'images',
          'imageMain',
          [col('brand.name'), 'brand']
        ]
      },
      include: [{
        model: ProductInfo,
        as: 'info',

        include: {
          model: Unit,
          attributes: []
        }
      },
      {
        model: Brand,
        attributes: []
      }]
    });

    return product;
  }
}

module.exports = new ProductService();
