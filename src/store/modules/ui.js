// constant mutations
export const UI_SET_VISIBLE_PRODUCT_ITEMS = 'UI_SET_VISIBLE_PRODUCT_ITEMS';
export const UI_SET_VISIBLE_CART_ITEMS = 'UI_SET_VISIBLE_CART_ITEMS';
export const UI_SNACKBAR_SET_VISIBLE = 'UI_SNARCKBAR_SET_VISIBLE';
export const UI_SNACKBAR_SET_CONTENT = 'UI_SNARCKBAR_SET_CONTENT';
export const UI_MODAL_SET_VISIBLE = 'UI_MODAL_SET_VISIBLE';
export const UI_MODAL_SET_CONTENT = 'UI_MODAL_SET_CONTENT';
export const UI_PAGINATION_SET_PAGE = 'UI_PAGINATION_SET_PAGE';


// initial state
const data = {
  visibleProductItems: true,
  visibleCartItems: true,
  snackbar: {
    visible: false,
    content: ''
  },
  modal: {
    visible: false,
    content: ''
  },
  product: {
    page: 1
  }
};

// mutations
export const mutations = {
  [UI_SET_VISIBLE_PRODUCT_ITEMS](state, value) {
    state.visibleProductItems = value;
  },
  [UI_SET_VISIBLE_CART_ITEMS](state, value) {
    state.visibleCartItems = value;
  },
  [UI_SNACKBAR_SET_VISIBLE](state, value) {
    state.snackbar.visible = value;
  },
  [UI_SNACKBAR_SET_CONTENT](state, value) {
    state.snackbar.content = value;
  },
  [UI_MODAL_SET_VISIBLE](state, value) {
    state.modal.visible = value;
  },
  [UI_MODAL_SET_CONTENT](state, value) {
    state.modal.content = value;
  },
  [UI_PAGINATION_SET_PAGE](state, value) {
    state.product.page = value;
  }
};

export const actions = {
  snackbar({ commit }, content) {
    commit(UI_SNACKBAR_SET_VISIBLE, false);
    commit(UI_SNACKBAR_SET_CONTENT, content);
    setTimeout(() => {
      commit(UI_SNACKBAR_SET_VISIBLE, true);
    }, 0);
  },
  modal({ commit }, content) {
    commit(UI_MODAL_SET_CONTENT, content);
    commit(UI_MODAL_SET_VISIBLE, true);
  }
};

export default {
  state: data,
  mutations,
  actions
};
