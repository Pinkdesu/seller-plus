export const setCategories = (state, payload) => {
  const { categories } = payload.data;

  if (!categories.length) return state;

  return categories;
};

export const setProducts = (_, payload) => {
  const { products } = payload.data;

  return products;
};

export const setProduct = (_, payload) => {
  const { product } = payload.data;
  const { brand } = product;

  return {
    ...product,
    brand: brand.name,
  };
};
