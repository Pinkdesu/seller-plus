export const setBrands = (_, payload) => {
  const { brands } = payload.data;

  return brands;
};

export const setProducts = (store, payload) => {
  const { products } = payload.data;

  return [...store, ...products];
};

export const setCategories = (_, payload) => {
  const { categories } = payload.data;

  return categories;
};
