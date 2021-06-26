import { PRODUCT } from '../constants';

export const setFormValue = (state, payload) => {
  const { stateName, value } = payload;

  return {
    ...state,
    [stateName]: value,
  };
};

export const setProductValue = (state, payload) => {
  const { stateName, index, value } = payload;

  const products = state.map((product, itemIndex) => {
    if (index !== itemIndex) return product;

    return { ...product, [stateName]: value };
  });

  return products;
};

export const addProduct = (state) => [...state, { ...PRODUCT }];

export const deleteProduct = (state) => {
  const items = [...state];
  items.pop();

  return items;
};
