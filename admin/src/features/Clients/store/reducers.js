export const setCompanyClients = (state, payload) => {
  const { clients } = payload.data;

  return [...state, ...clients];
};

export const setIndividualClients = (state, payload) => {
  const { clients } = payload.data;

  return [...state, ...clients];
};
