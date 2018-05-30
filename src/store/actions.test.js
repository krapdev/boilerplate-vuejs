import {
  addProductToCart,
  removeProductToCart
} from './actions';
import {
  PRODUCT_DECREMENT_INVENTORY,
  PRODUCT_INCREMENT_INVENTORY } from './modules/product';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_INCREMENT_QUANTITY,
  CART_DECREMENT_QUANTITY,
  CART_SET_CHECKOUT_STATUS } from './modules/cart';

describe('ACTIONS', () => {
  let commit;
  let dispatch;
  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
  });
  test('addProductToCart with no existing product', () => {
    const state = {
      cart: {
        list: []
      },
      product: {
        list: [{ id: 1, inventory: 1 }]
      }
    };
    addProductToCart({ commit, dispatch, state }, { id: 1, inventory: 1 });
    expect(commit).toHaveBeenCalledWith(CART_SET_CHECKOUT_STATUS, null);
    expect(commit).toHaveBeenCalledWith(PRODUCT_DECREMENT_INVENTORY, 1);
    expect(commit).toHaveBeenCalledWith(CART_ADD_ITEM, 1);
  });
  test('addProductToCart with existing product', () => {
    const state = {
      cart: {
        list: [{ id: 1, quantity: 1 }]
      },
      product: {
        list: [{ id: 1, inventory: 1 }]
      }
    };
    addProductToCart({ commit, dispatch, state }, { id: 1, inventory: 1 });
    expect(commit).toHaveBeenCalledWith(CART_SET_CHECKOUT_STATUS, null);
    expect(commit).toHaveBeenCalledWith(PRODUCT_DECREMENT_INVENTORY, 1);
    expect(commit).toHaveBeenCalledWith(CART_INCREMENT_QUANTITY, 1);
  });
  test('removeProductToCart with quantity 1', () => {
    const state = {
      cart: {
        list: [{ id: 1, quantity: 1 }]
      },
      product: {
        list: [{ id: 1, inventory: 1 }]
      }
    };
    removeProductToCart({ commit, dispatch, state }, { id: 1, inventory: 1 });
    expect(commit).toHaveBeenCalledWith(CART_SET_CHECKOUT_STATUS, null);
    expect(commit).toHaveBeenCalledWith(PRODUCT_INCREMENT_INVENTORY, 1);
    expect(commit).toHaveBeenCalledWith(CART_REMOVE_ITEM, 1);
  });
  test('removeProductToCart with quantity > 1', () => {
    const state = {
      cart: {
        list: [{ id: 1, quantity: 2 }]
      },
      product: {
        list: [{ id: 1, inventory: 1 }]
      }
    };
    removeProductToCart({ commit, dispatch, state }, { id: 1, inventory: 1 });
    expect(commit).toHaveBeenCalledWith(CART_SET_CHECKOUT_STATUS, null);
    expect(commit).toHaveBeenCalledWith(PRODUCT_INCREMENT_INVENTORY, 1);
    expect(commit).toHaveBeenCalledWith(CART_DECREMENT_QUANTITY, 1);
  });
});

