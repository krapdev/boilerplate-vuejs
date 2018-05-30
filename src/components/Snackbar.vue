<template>
  <div class="Snackbar"
       v-on:click="close(false)"
       v-if="snackbar.visible">
    <span class="Snackbar-content">{{ snackbar.content }}</span>
    <span class="Snackbar-btn-close">&times;</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { UI_SNACKBAR_SET_VISIBLE } from '@/store/modules/ui';

export default {
  computed: {
    ...mapState({
      snackbar: state => state.ui.snackbar
    })
  },
  methods: {
    ...mapMutations({
      close: UI_SNACKBAR_SET_VISIBLE
    })
  }
};
</script>

<style lang="scss" scoped>
  .Snackbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 20px;
    top: 0;
    left: 0;
    right: 0;
    background-color: $green;
    color: #fff;
    padding: 5px;
    font-size: 18px;
    &:hover {
      cursor: pointer;
    }
  }
  .Snackbar-content {
    flex: 1;
  }
  .Snackbar-btn-close {
    margin-right: 5px;
    color: white;
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;
    &:hover {
      color: #000000;
    }
  }
</style>
