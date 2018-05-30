<template>
  <div class="ProductItem">
    <div class="ProductItem-title">{{ product.title }}</div>
    <div>
      {{ product.price | toDecimal2 | toUSD }}
      <button class="btn"
              v-on:click="addProductToCart(product)">+</button>
      stock : {{ product.inventory }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
      validator: value => value.id > 0
    }
  },
  methods: {
    ...mapActions(['addProductToCart'])
  }
};
</script>

<style lang="scss" scoped>
  .ProductItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px 0;
  }
  .ProductItem-title {
    margin-right: 20px;
  }
</style>
