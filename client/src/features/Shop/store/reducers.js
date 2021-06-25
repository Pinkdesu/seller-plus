export const setCategories = (_, payload) => {
  const { categories } = payload.data;

  return categories;
};

export const setProduct = (_, payload) => {
  const { product } = payload.data;
  const { brand } = product;

  return {
    ...product,
    brand: brand.name,
  };
};

export const setPopularity = (_, payload) => {
  const { popularity } = payload.data;

  return popularity;
};
