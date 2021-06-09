import { AccountDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialOrders = [];

export const $orders = AccountDomain.store(initialOrders).on(
  events.getOrders.doneData,
  reducers.setOrders,
);
