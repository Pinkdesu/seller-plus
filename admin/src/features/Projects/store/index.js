import { ProjectDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialProjects = [];

export const $projects = ProjectDomain.store(initialProjects)
  .on(events.getProjects.doneData, reducers.setProjects)
  .reset(events.resetProjects);
