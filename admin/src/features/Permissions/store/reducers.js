export const setPermissions = (state, payload) => {
  const { permissions } = payload.data;

  return [...state, ...permissions];
};
