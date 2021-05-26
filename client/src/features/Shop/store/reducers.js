import { URL } from '~/api/constants';

export const setCategories = (state, { result }) => {
  const { categories } = result.data;

  if (!categories.length) return state;

  return categories.map((category) => ({
    ...category,
    image: URL(category.image),
  }));
};
