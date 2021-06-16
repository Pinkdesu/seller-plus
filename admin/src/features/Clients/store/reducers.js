export const setClients = (_, payload) => {
  const { clients } = payload.data;

  return [...clients];
};
