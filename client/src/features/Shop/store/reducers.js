import { URL } from '~/api/constants';

export const setCategories = (state, { result }) => {
  const { data } = result;

  if (!data.length) return state;

  return data.map((category) => ({
    ...category,
    image: URL(category.image),
  }));
};

export const setProducts = (_, { result }) => {
  const { data } = result;

  return data.map((product) => ({
    ...product,
    image: URL(product.images[0]),
  }));
};
