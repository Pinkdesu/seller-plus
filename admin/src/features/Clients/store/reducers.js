export const setClients = (state, payload) => {
  const { clients } = payload.data;

  return [...state, ...clients];
};

export const setSearchClients = (_, payload) => {
  const { clients } = payload.data;

  return [...clients];
};
