/* eslint-disable class-methods-use-this */
const { col } = require('sequelize');
const model = require('../models');
const { PRODUCTS_LIMIT, URL } = require('../constants');

class ProductService {
  async getProductsWithCount(config) {
    const productsWithCount = await model.Product.findAndCountAll({
      attributes: {
        include: [[col('brand.name'), 'brand']],
        exclude: ['brandId', 'categoryId', 'images', 'cratedAt', 'updatedAt']
      },
      include: {
        model: model.Brand,
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
    const product = await model.Product.findOne({
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
        model: model.ProductInfo,
        as: 'info',

        include: {
          model: model.Unit,
          attributes: []
        }
      },
      {
        model: model.Brand,
        attributes: []
      },
      {
        model: model.OriginCountry,
        attributes: []
      },
      {
        model: model.HeatingMethod,
        attributes: []
      },
      {
        model: model.HeatingType,
        attributes: []
      },
      {
        model: model.CombustionСhamber,
        attributes: []
      },
      {
        model: model.OperatingPrinciple,
        attributes: []
      }]
    });

    return product;
  }
}

module.exports = new ProductService();
