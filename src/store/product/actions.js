import axios from 'axios';

const productsURL = 'https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products';

export function getProducts({ commit }) {
  axios.get(productsURL)
    .then((products) => {
      commit('setProducts', products);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function productDetails({ commit }, id) {
  axios.get(productsURL, {
    params: {
      id
    }
  }).then((response) => {
    if (response.data.length) {
      commit('setProduct', response.data[0]);
    } else {
      console.error('Invalid ID provided', response);
    }
  }).catch((error) => {
    console.error(error);
  });
}

export function addCart({ commit, getters }, payload) {
  const cart = getters.cart;
  const product = payload.product;

  product.quantity = payload.quantity;
  cart.push(product);

  commit('setCart', cart);
}

export function removeCart({ commit, getters }, productId) {
  // as splice runs "in situ" we create a copy of "cart"
  // to avoid mutating the reference in the state
  const nextCart = [...getters.cart];
  const productIndex = nextCart.findIndex((product) => product.id === productId);

  if (productIndex) {
    nextCart.splice(productIndex, 1);
    commit('setCart', nextCart);
  } else {
    console.error(`No product with ID: ${productId}`);
  }
}
