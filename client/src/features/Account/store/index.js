import { AccountDomain } from './domain';
import { logout } from '~/features/AppBootstrap/store/events';
import * as events from './events';
import * as reducers from './reducers';

const initialOrder = {};
const initialOrders = [];
const initialIsSuccess = false;

export const $order = AccountDomain.store(initialOrder)
  .on(events.getOrderById.doneData, reducers.setOrder)
  .reset(logout.done);

export const $isSuccess = AccountDomain.store(initialIsSuccess)
  .on(events.addOrder.done, () => true)
  .reset(events.resetIsSuccess);

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
  .reset(logout.done);
