import { PaymentDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

export const $store = PaymentDomain.store('');
