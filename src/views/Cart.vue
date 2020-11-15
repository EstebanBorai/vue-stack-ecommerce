<template>
  <div class="container" style="padding: 30px;">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="item in cart"
          :key="item.id"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          href="#"
        >
          <img :src="item.imageUrl" alt="Product Image" height="60" width="60" />
          <p class="h4">{{ item.name }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unit Price</p>
              <p>${{ item.price }}</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>${{ item.price * item.quantity }}</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ item.quantity }}</p>
            </div>
          </div>
        </a>
        <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <p class="h4">Total</p>
          <div>
            <p>Total Price</p>
            <p>${{ totalPrice }}</p>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
          @click="checkout()"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      totalPrice: 0,
    }
  },
  computed: {
    ...mapGetters('product', ['cart']),
    ...mapGetters('account', ['user']),
  },
  methods: {
    ...mapActions('product', ['removeCart']),
    calcPrice() {
      this.totalPrice = this.cart.reduce((total, product) => total + product.price, 0);
    },
    checkout() {
      const vm = this;

      setTimeout(() => {
        vm.removeCart();
        alert('Purchase Successful');
        vm.$router.push('/');
      }, 2000);
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>
