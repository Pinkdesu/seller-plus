import { ProjectDomain } from './domain';
import { ProjectController } from '~/api/controllers/ProjectController';

export const getProjects = ProjectDomain.effect().use(
  ProjectController.getProjects,
);

export const resetProjects = ProjectDomain.event();
