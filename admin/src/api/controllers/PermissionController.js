import { api } from '../index';

export class PermissionController {
  static getPermissions = (payload) =>
    api.get('/admin/permission', { params: payload });
}
