import { AccountDomain } from './domain';
import { OrderController } from '~/api/controllers/OrderController';

export const addOrder = AccountDomain.effect().use(OrderController.addOrder);

export const getOrders = AccountDomain.effect().use(OrderController.getOrders);
