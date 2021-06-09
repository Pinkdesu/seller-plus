export const setOrders = (_, payload) => {
  const { orders } = payload.data;

  return orders;
};
