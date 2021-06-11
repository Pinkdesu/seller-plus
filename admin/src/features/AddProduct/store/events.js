import { ProductsDomain } from './domain';
import { BrandController } from '~/api/controllers/BrandController';
import { CategoryController } from '~/api/controllers/CategoryController';
import { UnitController } from '~/api/controllers/UnitController';
import { ProductController } from '~/api/controllers/ProductController';

export const getBrands = ProductsDomain.effect().use(BrandController.getBrands);

export const getCategories = ProductsDomain.effect().use(
  CategoryController.getCategories,
);

export const getUnits = ProductsDomain.effect().use(UnitController.getUnits);

export const addProduct = ProductsDomain.effect().use(
  ProductController.addProduct,
);
