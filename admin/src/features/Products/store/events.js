import { ProductsDomain } from './domain';
import { BrandController } from '~/api/controllers/BrandController';
import { CategoryController } from '~/api/controllers/CategoryController';
import { ProductController } from '~/api/controllers/ProductController';

export const getBrands = ProductsDomain.effect().use(BrandController.getBrands);

export const getCategories = ProductsDomain.effect().use(
  CategoryController.getCategories,
);

export const getProducts = ProductsDomain.effect().use(
  ProductController.getProducts,
);
