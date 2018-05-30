<template>
  <div class="pagination">
    <a href="#/shop/"
       v-on:click="setPage(1)">&laquo;</a>
    <a href="#/shop/"
       v-for="page in pagesCount"
       v-bind:class="{active: isActive(page)}"
       v-bind:key="page"
       v-on:click="setPage(page)">{{ page }}</a>
    <a href="#/shop/"
       v-on:click="setPage(pagesCount)">&raquo;</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { UI_PAGINATION_SET_PAGE } from '@/store/modules/ui';

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState({
      pageActive: state => state.ui.product.page
    }),
    pagesCount() {
      return Math.ceil(this.items.length / 4);
    }
  },
  methods: {
    ...mapMutations({
      setPage: UI_PAGINATION_SET_PAGE
    }),
    isActive(number) {
      return this.pageActive === number;
    }
  }
};
</script>

<style lang="scss" scoped>
  /* Pagination links */
  .pagination a {
    color: black;
    float: left;
    padding: 6px 12px;
    text-decoration: none;
    transition: background-color .3s;
  }

  /* Style the active/current link */
  .pagination a.active {
    background-color: $dark-grey;
    color: white;
  }

  /* Add a grey background color on mouse-over */
  .pagination a:hover:not(.active) {background-color: #ddd;}
</style>
