import { AddProductDomain } from './domain';
import { UnitController } from '~/api/controllers/UnitController';
import { ProductController } from '~/api/controllers/ProductController';
import { OriginCountryController } from '~/api/controllers/OriginCountryController';

export const getUnits = AddProductDomain.effect().use(UnitController.getUnits);

export const getCountries = AddProductDomain.effect().use(
  OriginCountryController.getCountries,
);

export const addProduct = AddProductDomain.effect().use(
  ProductController.addProduct,
);

export const addImages = AddProductDomain.event();

export const changeFormValues = AddProductDomain.event();

export const addInfoItem = AddProductDomain.event();

export const deleteInfoItem = AddProductDomain.event();

export const changeInfoValues = AddProductDomain.event();

export const changeUnitId = AddProductDomain.event();
