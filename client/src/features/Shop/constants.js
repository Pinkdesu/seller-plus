import category1 from '~/assets/images/shop/category1.png';
import category2 from '~/assets/images/shop/category2.png';
import product from '~/assets/images/shop/product.jpg';

export const CATEGORIES = [
  {
    id: 1,
    name: 'Котлы отопления',
    image: category1,
  },
  {
    id: 2,
    name: 'Водонагреватели',
    image: category2,
  },
];

export const PRODUCTS = [...new Array(20)].map((_, index) => ({
  id: index,
  image: product,
  name: 'BAXI 100+ ULTRA',
  price: '150000',
  count: 5,
}));
