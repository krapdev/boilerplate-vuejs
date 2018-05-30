import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import product from './modules/product';
import * as actions from './actions';
import ui from './modules/ui';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    cart,
    product,
    ui
  },
  strict: process.env.NODE_ENV !== 'production'
});
