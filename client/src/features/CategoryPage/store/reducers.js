export const setProducts = (state, payload) => {
  const { products } = payload.data;

  return [...state, ...products];
};

export const setFilters = (state, payload) => {
  const { brands, countries } = payload;

  return state.map((item) => {
    if (item.title === countries.title) {
      item.values = countries.values;
    }

    if (item.title === brands.title) {
      item.values = brands.values;
    }

    return item;
  });
};

export const setPriceFilter = (_, payload) => {
  const { minPrice, maxPrice } = payload;

  return {
    min: minPrice,
    max: maxPrice,
  };
};

export const setPagesCount = (_, payload) => {
  const { pagesCount } = payload.data;

  return pagesCount;
};
