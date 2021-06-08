import { PaymentDomain } from './domain';
import { OrderController } from '~/api/controllers/OrderController';

export const addOrder = PaymentDomain.effect().use(OrderController.addOrder);
