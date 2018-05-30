<template>
  <div class="ShoppingCart">
    <div class="ShoppingCart-list">
      <ul>
        <li class="ShoppingCart-product"
            v-for="product in cartProducts"
            v-bind:key="product.id">
          <div class="ShoppingCart-product-title">{{ product.title }}</div>
          <div>
            <button class="btn"
                    v-on:click="removeProductToCart(product)">-</button>
            <span>{{ product.quantity }}</span>
            <button
              class="btn"
              v-on:click="addProductToCart(product)">+</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="ShoppingCart-footer">
      <button class="btn ShoppingCart-btn-checkout"
              v-bind:disabled="!cartProducts.length"
              v-on:click="checkout">
        <span>Proceed to Checkout</span><span>{{ total | toDecimal2 | toUSD }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import _ from 'lodash';

export default {
  computed: {
    ...mapState({
      products: state => state.product.list,
      cart: state => state.cart.list
    }),
    cartProducts() {
      return _.map(this.cart, productCart => {
        const product = _.find(this.products, p => p.id === productCart.id);
        return Object.assign(productCart, product);
      });
    },
    total() {
      return this.cartProducts.reduce((total, product) => (total + product.price) * product.quantity, 0);
    }
  },
  methods: {
    ...mapActions(['checkout', 'addProductToCart', 'removeProductToCart'])
  }
};
</script>

<style lang="scss" scoped>
  .ShoppingCart {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    li {
      color: $dark-grey;
      list-style-type: none;
    }
  }
  .ShoppingCart-list {
    display: flex;
    justify-content: center;
  }
  .ShoppingCart-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px;
  }
  .ShoppingCart-product-title {
    margin-right: 20px;
  }
  .ShoppingCart-footer {
    display: flex;
    flex-direction: column;
    .ShoppingCart-message-status {
      margin: 5px 0;
      font-size: 20px;
      color: $dark-grey;
    }
    .ShoppingCart-btn-checkout {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 400px;
    }
  }
</style>
