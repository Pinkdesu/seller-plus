export const setApplications = (state, payload) => {
  const { applications } = payload.data;

  return [...state, ...applications];
};
