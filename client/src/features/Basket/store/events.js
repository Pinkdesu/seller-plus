import { BasketDomain } from './domain';
import { BasketController } from '~/api/controllers/BasketController';

export const getBasket = BasketDomain.effect().use(BasketController.getBasket);

export const addProduct = BasketDomain.event();

export const noAuthAddProduct = BasketDomain.event();

export const authAddProduct = BasketDomain.effect().use(
  BasketController.addProduct,
);

export const deleteProduct = BasketDomain.event();

export const noAuthDeleteProduct = BasketDomain.event();

export const authDeleteProduct = BasketDomain.effect().use(
  BasketController.deleteProduct,
);

export const fillBasket = BasketDomain.effect().use((products) => {
  const productsInfo = products.map((product) => ({
    id: product.id,
    count: product.quantity,
  }));

  return BasketController.fillBasket(JSON.stringify(productsInfo));
});

export const openMenu = BasketDomain.event();

export const closeMenu = BasketDomain.event();
