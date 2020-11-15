<template>
  <div class="row">
    <div class="col-3">
      <label class="sr-only">Quantity</label>
      <input
        class="form-control mb-2 mr-sm-2"
        type="number"
        v-model="quantity"
      />
    </div>
    <button
      v-if="!isProductInCart"
      type="button"
      class="btn btn-primary btn-lg btn-block col-9"
      @click.stop="addCart({ product, quantity })"
    >
      Add to cart
    </button>
    <button
      v-else
      type="button"
      class="btn btn-primary btn-lg btn-block col-9"
      @click.stop="removeCart(product.id)"
    >
      Remove from cart
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['product'],
  data() {
    return {
      isProductInCart: false,
      quantity: 1,
    }
  },
  computed: {
    ...mapState('product', ['cart']),
  },
  methods: {
    ...mapActions('product', ['addCart', 'removeCart']),
    isInCart(id) {
      return this.cart.some((product) => product.id === id);
    }
  },
  watch: {
    product(product) {
      this.isProductInCart = this.isInCart(product.id)
    },
    cart() {
      this.isProductInCart = this.isInCart(this.product.id);
    },
    quantity(value) {
      if (value <= 0) {
        this.quantity = 1;
      }
    },
  },
};
</script>