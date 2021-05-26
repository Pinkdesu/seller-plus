import { BasketDomain } from './domain';

//export const getCategories = BasketDomain;

export const addProduct = BasketDomain.event();

export const deleteProduct = BasketDomain.event();

export const openMenu = BasketDomain.event();

export const closeMenu = BasketDomain.event();
