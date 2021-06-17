import { api } from '../index';

export class ProjectController {
  static getProjects = (payload) =>
    api.get('/admin/project', { params: payload });
}
