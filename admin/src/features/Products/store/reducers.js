export const setBrands = (_, payload) => {
  const { brands } = payload.data;

  return brands;
};

export const setProducts = (state, payload) => {
  const { products } = payload.data;

  return [...state, ...products];
};

export const setPagesCount = (_, payload) => {
  const { pagesCount } = payload.data;

  return pagesCount;
};

export const increasePageNumber = (state) => state + 1;

export const reducePageNumber = (state) => (state > 1 ? state - 1 : state);

export const setCategories = (_, payload) => {
  const { categories } = payload.data;

  return categories;
};
