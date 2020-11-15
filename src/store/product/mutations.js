export function setProducts(state, products) {
  state.products = products.data;
}

export function setProduct(state, product) {
  console.log(product);
  state.product = product;
}

export function setCart(state, cart) {
  state.cart = cart;
}

export function setLoad(state, val) {
  state.uploadingData = val
}
