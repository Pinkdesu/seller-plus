import { ActDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialActs = [];

export const $acts = ActDomain.store(initialActs)
  .on(events.getActs.doneData, reducers.setActs)
  .reset(events.resetActs);
