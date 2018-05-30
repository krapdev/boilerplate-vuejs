import _ from 'lodash';
import {
  PRODUCT_DECREMENT_INVENTORY,
  PRODUCT_INCREMENT_INVENTORY } from './modules/product';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SET_CHECKOUT_STATUS,
  CART_INCREMENT_QUANTITY,
  CART_DECREMENT_QUANTITY,
  CART_SET_ITEMS
} from './modules/cart';
import shop from '../api/shop';

/**
 * add product or increase quantity of a product cart
 * @param commit
 * @param product
 */
export function addProductToCart({ commit, dispatch, state }, product) {
  if (product.inventory > 0) {
    commit(CART_SET_CHECKOUT_STATUS, null);
    const registeredProduct = _.find(state.cart.list, { id: product.id });
    if (registeredProduct) {
      commit(CART_INCREMENT_QUANTITY, product.id);
    } else {
      commit(CART_ADD_ITEM, product.id);
      dispatch('snackbar', `${product.title} was added, check your Cart...`);
    }
    commit(PRODUCT_DECREMENT_INVENTORY, product.id);
  }
}

/**
 * remove product or decrease quantity of a product cart
 * @param commit
 * @param state
 * @param product
 */
export function removeProductToCart({ commit, dispatch, state }, product) {
  commit(CART_SET_CHECKOUT_STATUS, null);
  const registeredProduct = _.find(state.cart.list, { id: product.id });
  if (registeredProduct.quantity === 1) {
    commit(CART_REMOVE_ITEM, product.id);
    dispatch('snackbar', `${product.title} was removed, please check your Cart...`);
  } else {
    commit(CART_DECREMENT_QUANTITY, product.id);
  }
  commit(PRODUCT_INCREMENT_INVENTORY, product.id);
}

/**
 * checkout purchases
 * @param commit
 * @param dispatch
 * @param state
 * @param products
 */
export function checkout({ commit, dispatch, state }, products) {
  const savedCartItems = [...state.cart.list];
  commit(CART_SET_ITEMS, []);
  shop.buyProducts(
    products,
    () => {
      commit(CART_SET_CHECKOUT_STATUS, 'success');
      dispatch('snackbar', 'Success !! Your purchases have been accepted...');
    },
    () => {
      commit(CART_SET_CHECKOUT_STATUS, 'error');
      commit(CART_SET_ITEMS, savedCartItems);
      dispatch('modal', 'Error !! Please try again...');
    }
  );
}
