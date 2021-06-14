/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const sequalize = require('sequelize');
const ApiError = require('../../error/apiError');
const {
  Product, ProductInfo, Brand, Unit
} = require('../../models');
const { URL } = require('../../constants');

const getProducts = (config) => Product.findAll({
  ...config,
  attributes: {
    include: [[sequalize.col('brand.name'), 'brand']],
    exclude: ['brandId', 'categoryId', 'images']
  },
  include: {
    model: Brand,
    attributes: []
  },
  raw: true
});

class ProductController {
  async getAll(req, res) {
    const {
      brandId,
      categoryId,
      limit: defLimit,
      page: defPage
    } = req.query;

    let products;

    const limit = defLimit > 0 ? defLimit : 20;
    const page = defPage > 0 ? defPage : 1;
    const offset = page * limit - limit;

    if (!brandId && !categoryId) {
      products = await Product.findAll({
        limit,
        offset
      });
    }

    if (brandId && !categoryId) {
      products = await Product.findAll({
        where: {
          brandId
        },
        limit,
        offset
      });
    }

    if (!brandId && categoryId) {
      products = await getProducts({
        where: { categoryId },
        offset,
        limit
      });
    }

    if (brandId && categoryId) {
      products = await Product.findAll({
        where: {
          categoryId,
          brandId
        },
        limit,
        offset
      });
    }

    const productsWithUrl = products.map((product) => ({
      ...product,
      imageMain: URL(product.imageMain, 'products')
    }));

    return res.json({ products: productsWithUrl });
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const product = await Product.findOne({
        where: { id },
        attributes: [
          'name',
          'description',
          'count',
          'price',
          'images',
          'imageMain'
        ],
        include: [{
          model: ProductInfo,
          as: 'info',

          include: {
            model: Unit,
            attributes: ['value']
          }
        },
        {
          model: Brand,
          attributes: ['name']
        }]
      });

      const values = product.dataValues;

      const productWithUrl = {
        ...values,
        images: values.images.map((image) => URL(image, 'products')),
        imageMain: URL(values.imageMain, 'products')
      };

      return res.json({ product: productWithUrl });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductController();
