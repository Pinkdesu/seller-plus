export const setBrands = (_, payload) => {
  const { brands } = payload.data;

  return brands;
};

export const setCategories = (_, payload) => {
  const { categories } = payload.data;

  return categories;
};

export const setUnits = (_, payload) => {
  const { units } = payload.data;

  return units;
};
