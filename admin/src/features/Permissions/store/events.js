import { PermissionDomain } from './domain';
import { PermissionController } from '~/api/controllers/PermissionController';

export const getPermissions = PermissionDomain.effect().use(
  PermissionController.getPermissions,
);

export const resetPermissions = PermissionDomain.event();
