import { createStore } from 'vuex'

import account from './account';
import product from './product';

export default createStore({
  modules: {
    account,
    product
  },
  strict: process.env.DEV,
});
