import { AccountDomain } from './domain';
import { logOut } from '~/features/AppBootstrap/store/events';
import * as events from './events';
import * as reducers from './reducers';

const initialOrder = {};
const initialOrders = [];

export const $order = AccountDomain.store(initialOrder)
  .on(events.getOrderById, reducers.setOrder)
  .reset(logOut);

export const $orders = AccountDomain.store(initialOrders)
  .on(events.getOrders.doneData, reducers.setOrders)
  .reset(logOut);
