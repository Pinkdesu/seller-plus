/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const {
  Op, where, col, fn
} = require('sequelize');
const ApiError = require('../../error/apiError');
const {
  Product, ProductInfo, Brand, Unit, Category, OrderProduct
} = require('../../models');
const { URL, PRODUCTS_LIMIT } = require('../../constants');
const productService = require('../../services/productService');

class ProductController {
  async getAll(req, res, next) {
    try {
      const {
        brandId,
        categoryId,
        page: defPage
      } = req.query;

      let productsWithCount;

      const page = defPage > 0 ? defPage : 1;
      const offset = page * PRODUCTS_LIMIT - PRODUCTS_LIMIT;

      if (!brandId && !categoryId) {
        productsWithCount = await productService.getProductsWithCount({
          offset
        });
      }

      if (brandId && !categoryId) {
        productsWithCount = await productService.getProductsWithCount({
          where: {
            brandId
          },
          offset
        });
      }

      if (!brandId && categoryId) {
        productsWithCount = await productService.getProductsWithCount({
          where: { categoryId },
          offset
        });
      }

      if (brandId && categoryId) {
        productsWithCount = await productService.getProductsWithCount({
          where: {
            categoryId,
            brandId
          },
          offset
        });
      }

      const { pagesCount, products } = productsWithCount;

      return res.json({ products, pagesCount });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
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

  async getFilters(req, res, next) {
    try {
      const { categoryId } = req.query;

      const brands = await Brand.findAll({
        attributes: ['id', 'name'],
        include: {
          model: Category,
          where: { id: categoryId },
          attributes: []
        }
      });

      const countries = await ProductInfo.findAll({
        where: {
          title: '????????????'
        },
        attributes: ['description'],
        include: {
          model: Product,
          attributes: [],
          where: { categoryId },
          required: false
        },
        group: [['product_info.description'], ['product.categoryId']]
      });

      const priceMax = await Product.max('price', { where: { categoryId } });
      const priceMin = await Product.min('price', { where: { categoryId } });

      return res.json({
        brands: {
          title: '??????????????????????????',
          values: brands
        },
        countries: {
          title: '????????????',
          values: countries
        },
        priceMax,
        priceMin
      });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getSearch(req, res, next) {
    try {
      const { text, page: defPage } = req.query;

      const page = defPage > 0 ? defPage : 1;
      const offset = page * PRODUCTS_LIMIT - PRODUCTS_LIMIT;
      const reg = `%${text}%`;

      const productsWithCount = await productService.getProductsWithCount({
        where: {
          [Op.or]: [
            where(col('brand.name'), { [Op.iLike]: reg }),
            {
              name: {
                [Op.iLike]: reg
              }
            }
          ]
        },
        offset
      });

      const { pagesCount, products } = productsWithCount;

      return res.json({ products, pagesCount });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getPopularity(_, res, next) {
    try {
      const popularity = await OrderProduct.findAll({
        attributes: [
          ['productId', 'id'],
          [col('product.name'), 'name'],
          [col('product.price'), 'price'],
          [col('product.count'), 'count'],
          [col('product.imageMain'), 'imageMain'],
          [col('product->brand.name'), 'brand']
        ],
        include: {
          model: Product,
          attributes: [],
          include: {
            model: Brand,
            attributes: [],
            required: false
          }
        },
        group: [
          'productId',
          'product.name',
          'product.price',
          'product.count',
          'product.imageMain',
          'product->brand.id'
        ],
        order: [
          [fn('max', 'quantity'), 'DESC']
        ],
        limit: 10,
        raw: true
      }).then((data) => data.map((item) => ({
        ...item,
        imageMain: URL(item.imageMain, 'products')
      })));

      return res.json({ popularity });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductController();
