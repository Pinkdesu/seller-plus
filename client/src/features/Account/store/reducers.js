export const setOrders = (_, payload) => {
  const { orders } = payload.data;

  return orders;
};

export const setOrder = (_, payload) => {
  const { order } = payload.data;

  return order;
};
