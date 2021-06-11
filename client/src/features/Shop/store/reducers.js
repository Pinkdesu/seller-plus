import { URL } from '~/api/constants';

export const setCategories = (state, payload) => {
  const { categories } = payload.data;

  if (!categories.length) return state;

  return categories;
};

export const setProducts = (_, payload) => {
  const { products } = payload.data;

  return products;
};

export const setProduct = (_, { data }) => {
  const { product } = data;

  const imagesWithUrl = product.images.map((image) => URL(image));

  return {
    ...product,
    images: imagesWithUrl,
  };
};
