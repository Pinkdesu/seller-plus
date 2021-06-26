/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Product, ProductInfo } = require('../../models');

class ProductController {
  async create(req, res, next) {
    try {
      const {
        info,
        name,
        price,
        brandId,
        categoryId,
        description
      } = req.body;

      const { images } = req.files;
      const imagesNames = [];

      if (Array.isArray(images)) {
        images.forEach((image) => {
          const fileName = moveFile(image, 'products');
          imagesNames.push(fileName);
        });
      }
      else {
        const fileName = moveFile(images, 'products');
        imagesNames.push(fileName);
      }

      const product = await Product.create({
        name,
        price,
        brandId,
        categoryId,
        description,
        images: imagesNames,
        imageMain: imagesNames[0]
      });

      JSON.parse(info).forEach((item) => ProductInfo.create({
        title: item.title,
        description: item.description,
        productId: product.id,
        unitId: item.id
      }));

      return res.json({ success: true });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductController();
