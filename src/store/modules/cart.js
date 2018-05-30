import _ from 'lodash';

// constant mutations
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_SET_ITEMS = 'CART_SET_ITEMS';
export const CART_SET_CHECKOUT_STATUS = 'CART_SET_CHECKOUT_STATUS';
export const CART_INCREMENT_QUANTITY = 'CART_INCREMENT_QUANTITY';
export const CART_DECREMENT_QUANTITY = 'CART_DECREMENT_QUANTITY';

// initial state
// shape: [{ id, quantity}]
const initialState = {
  list: [],
  checkoutStatus: null
};

const getters = {
};

// mutations
export const mutations = {
  /**
   * if product exists, increment quantity, else add product to cart
   * @param state
   * @param product
   */
  [CART_ADD_ITEM]: (state, id) => {
    state.list.push({ id, quantity: 1 });
  },
  [CART_REMOVE_ITEM]: (state, id) => {
    state.list = state.list.filter(item => item.id !== id);
  },
  [CART_SET_ITEMS]: (state, items) => {
    state.list = items;
  },
  [CART_SET_CHECKOUT_STATUS]: (state, status) => {
    state.checkoutStatus = status;
  },
  [CART_INCREMENT_QUANTITY]: (state, id) => {
    _.find(state.list, { id }).quantity += 1;
  },
  [CART_DECREMENT_QUANTITY]: (state, id) => {
    _.find(state.list, { id }).quantity -= 1;
  }
};

export default {
  state: initialState,
  getters,
  mutations
};
