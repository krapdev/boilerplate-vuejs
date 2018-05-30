<template>
  <div class="Modal"
       v-if="modal.visible">
    <div class="Modal-content">
      <span class="Modal-btn-close"
            v-on:click="setVisible(false)">&times;</span>
      <p>{{ modal.content }}</p>
      <button class="btn"
              v-on:click="setVisible(false)">Close</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { UI_MODAL_SET_VISIBLE } from '@/store/modules/ui';

export default {
  computed: {
    ...mapState({
      modal: state => state.ui.modal
    })
  },
  methods: {
    ...mapMutations({
      setVisible: UI_MODAL_SET_VISIBLE
    })
  }
};
</script>

<style lang="scss" scoped>
  .Modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  .Modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 10px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  .Modal-btn-close {
    width: 32px;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  .Modal-btn-close:hover,
  .Modal-btn-close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
