import { AccountDomain } from './domain';
import { logOut } from '~/features/AppBootstrap/store/events';
import * as events from './events';
import * as reducers from './reducers';

const initialOrder = {};
const initialOrders = [];

export const $order = AccountDomain.store(initialOrder)
  .on(events.getOrderById.doneData, reducers.setOrder)
  .reset(logOut);

export const $orderProductsCount = $order.map((state) => {
  if (!state?.products) return 0;
  const { products } = state;

  return products.reduce(
    (totalCount, current) => totalCount + current.purchaseCount,
    0,
  );
});

export const $orders = AccountDomain.store(initialOrders)
  .on(events.getOrders.doneData, reducers.setOrders)
  .reset(logOut);
