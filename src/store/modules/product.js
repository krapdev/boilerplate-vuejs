import _ from 'lodash';
import shop from '@/api/shop';

export const PRODUCT_RECEIVE_PRODUCTS = 'PRODUCT_RECEIVE_PRODUCTS';
export const PRODUCT_DECREMENT_INVENTORY = 'PRODUCT_DECREMENT_INVENTORY';
export const PRODUCT_INCREMENT_INVENTORY = 'PRODUCT_INCREMENT_INVENTORY';

const initialState = {
  list: []
};

// getters
export const getters = {
  getProductsByPage: state => page => _.slice(state.list, (page - 1) * 4, ((page - 1) * 4) + 4)
};

// mutations
export const mutations = {
  [PRODUCT_RECEIVE_PRODUCTS](state, products) {
    state.list = products;
  },
  [PRODUCT_DECREMENT_INVENTORY](state, id) {
    _.find(state.list, p => p.id === id).inventory -= 1;
  },
  [PRODUCT_INCREMENT_INVENTORY](state, id) {
    _.find(state.list, p => p.id === id).inventory += 1;
  }
};

// actions
const actions = {
  fetchProducts({ commit }) {
    shop.getProducts(products => {
      commit(PRODUCT_RECEIVE_PRODUCTS, products);
    });
  }
};

export default {
  state: initialState,
  getters,
  actions,
  mutations
};

