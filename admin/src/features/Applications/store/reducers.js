export const setApplications = (state, payload) => {
  const { applications } = payload.data;

  return [...state, ...applications];
};

export const setSearchApplications = (_, payload) => {
  const { applications } = payload.data;

  return [...applications];
};

export const setStatuses = (_, payload) => {
  const { statuses } = payload.data;

  return [...statuses];
};
