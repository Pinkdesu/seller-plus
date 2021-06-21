import { PermissionDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialPermissions = [];

export const $permissions = PermissionDomain.store(initialPermissions)
  .on(events.getPermissions.doneData, reducers.setPermissions)
  .reset(events.resetPermissions);
