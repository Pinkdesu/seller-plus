/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const sequalize = require('sequelize');
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Product, ProductInfo, Brand } = require('../../models');

const getProducts = (config) => Product.findAll({
  ...config,
  attributes: {
    include: [[sequalize.col('brand.name'), 'brand']],
    exclude: ['brandId', 'categoryId']
  },
  include: {
    model: Brand,
    attributes: []
  },
  raw: true
});

class ProductController {
  async create(req, res, next) {
    try {
      const {
        info,
        name,
        price,
        count,
        description,
        brandId,
        categoryId
      } = req.body;
      const { images } = req.files;

      const imagesNames = [];

      if (Array.isArray(images)) {
        images.forEach((image) => {
          const fileName = moveFile(image);
          imagesNames.push(fileName);
        });
      }
      else {
        const fileName = moveFile(images);
        imagesNames.push(fileName);
      }

      const product = await Product.create({
        images: imagesNames,
        price: +price,
        name,
        count,
        description,
        brandId,
        categoryId
      });

      if (info) {
        const parsedInfo = JSON.parse(info);

        parsedInfo.forEach((item) => ProductInfo.create({
          title: item.title,
          description: item.description,
          productId: product.id
        }));
      }

      return res.json(product);
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

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

    return res.json(products);
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const product = await Product.findOne({
        where: { id },
        include: {
          model: ProductInfo,
          as: 'info'
        },
        attributes: ['name', 'description', 'count', 'price', 'images']
      });

      return res.json({ product });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductController();
