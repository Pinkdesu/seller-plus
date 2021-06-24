import product from '~/assets/images/shop/product.jpg';

export const PRODUCTS = [...new Array(20)].map((_, index) => ({
  id: index + 1,
  image: product,
  name: 'Водонагреватель V 510 TS',
  brand: 'BAXI',
  price: '14700',
  count: 5,
}));

export const DEFAULT_CATEGORIES = [
  {
    id: 'def1',
    loading: true,
  },
  {
    id: 'def2',
    loading: true,
  },
];
