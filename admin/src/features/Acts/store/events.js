import { ActDomain } from './domain';
import { ActController } from '~/api/controllers/ActController';

export const getActs = ActDomain.effect().use(ActController.getActs);

export const resetActs = ActDomain.event();
