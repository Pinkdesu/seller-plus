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

export const addImages = ProductsDomain.event();

export const changeFormValues = ProductsDomain.event();

export const addInfoItem = ProductsDomain.event();

export const deleteInfoItem = ProductsDomain.event();

export const changeInfoValues = ProductsDomain.event();

export const changeUnitId = ProductsDomain.event();
