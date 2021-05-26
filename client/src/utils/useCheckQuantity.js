import { useStoreMap } from 'effector-react';
import { $products } from '~/features/Basket/store';

export const useCheckQuantity = (id, count) => {
  const currentQuantity = useStoreMap({
    store: $products,
    keys: [id],
    fn: (products) =>
      products?.find((product) => product.id === id)?.quantity ?? 0,
  });

  return currentQuantity < count;
};
