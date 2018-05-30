<template>
  <div class="ProductList">
    <div class="ProductList-list">
      <ul>
        <li v-for="product in getProductsByPage(page)"
            v-bind:key="product.id">
          <ProductItem v-bind:product="product"/>
        </li>
      </ul>
    </div>
    <div>
      <Pagination v-bind:items="products"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import ProductItem from './ProductItem';
import Pagination from './Pagination';


export default {
  name: 'ProductList',
  computed: {
    ...mapState({
      products: state => state.product.list,
      page: state => state.ui.product.page
    }),
    ...mapGetters([
      'getProductsByPage'
    ])
  },
  methods: {
    ...mapActions({
      getProducts: 'fetchProducts'
    })
  },
  created() {
    this.getProducts();
  },
  components: {
    ProductItem, Pagination
  }
};
</script>

<style lang="scss" scoped>
  .ProductList {
    height: 208px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .ProductList-list {
    display: flex;
    justify-content: center;
    li {
      color: $dark-grey;
      list-style-type: none;
    }
  }
</style>
