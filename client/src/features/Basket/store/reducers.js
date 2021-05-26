export const addProduct = (state, payload) => {
  const { id, quantity = 1 } = payload;
  const { products, productsCount } = state;

  const sum = productsCount + quantity;
  const similarProduct = products.find((product) => product.id === id);

  if (similarProduct) similarProduct.quantity += quantity;
  if (!similarProduct) products.push(payload);

  return { products, productsCount: sum };
};

export const deleteProduct = (state, id) => {
  const { products, productsCount } = state;

  const product = products.find((prod) => prod.id === id);

  if (!product) return state;

  let productsList = products;
  const reduce = productsCount - 1;

  if (product.quantity === 1)
    productsList = productsList.filter((prod) => prod.id !== id);

  if (product.quantity > 1) product.quantity -= 1;

  return { products: productsList, productsCount: reduce };
};
