export const setActs = (state, payload) => {
  const { acts } = payload.data;

  return [...state, ...acts];
};
