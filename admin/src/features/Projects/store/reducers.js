export const setProjects = (state, payload) => {
  const { projects } = payload.data;

  return [...state, ...projects];
};
