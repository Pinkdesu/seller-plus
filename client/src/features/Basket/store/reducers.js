export const addProduct = (state, payload) => {
  const { id, quantity = 1 } = payload;
  const products = [...state];

  const similarProduct = products.find((product) => product.id === id);
  if (!similarProduct) products.push(payload);
  if (similarProduct) similarProduct.quantity += quantity;

  return products;
};

export const deleteProduct = (state, id) => {
  const products = state.reduce((result, product) => {
    if (product.id === id) {
      if (product.quantity === 1) return result;
      if (product.quantity > 1) product.quantity -= 1;
    }

    result.push(product);
    return result;
  }, []);

  return products;
};
