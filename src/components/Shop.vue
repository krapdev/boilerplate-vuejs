<template>
  <div class="Shop">
    <h3>Shopping make fun and happiness...</h3>
    <h2 class="accordion"
        v-on:click="collapseProductItems(!visibleProductItems)"
        v-bind:class="{active: visibleProductItems}">Phone Store</h2>
    <transition name="fade"
                appear>
      <ProductList v-show="visibleProductItems"/>
    </transition>
    <h2 class="accordion"
        v-on:click="collapseCartItems(!visibleCartItems)"
        v-bind:class="{active: visibleCartItems}">Your Cart</h2>
    <transition name="fade"
                appear>
      <ShoppingCart v-show="visibleCartItems"/>
    </transition>
    <transition name="slide">
      <Snackbar/>
    </transition>
    <transition name="slide-fade">
      <Modal/>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { UI_SET_VISIBLE_PRODUCT_ITEMS, UI_SET_VISIBLE_CART_ITEMS } from '@/store/modules/ui';
import ProductList from '@/components/ProductList';
import ShoppingCart from '@/components/ShoppingCart';
import Snackbar from '@/components/Snackbar';
import Modal from '@/components/Modal';

export default {
  components: { ProductList, ShoppingCart, Snackbar, Modal },
  computed: {
    ...mapState({
      visibleProductItems: state => state.ui.visibleProductItems,
      visibleCartItems: state => state.ui.visibleCartItems
    })
  },
  methods: {
    ...mapMutations({
      collapseProductItems: UI_SET_VISIBLE_PRODUCT_ITEMS,
      collapseCartItems: UI_SET_VISIBLE_CART_ITEMS
    })
  }
};
</script>

<style lang="scss" scoped>
</style>
