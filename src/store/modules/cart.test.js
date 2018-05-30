import { mutations } from './cart';

const {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_DECREMENT_QUANTITY,
  CART_INCREMENT_QUANTITY,
  CART_SET_CHECKOUT_STATUS,
  CART_SET_ITEMS } = mutations;

test('CART_ADD_ITEM', () => {
  // mock state
  const state = {
    list: []
  };
  const productToAdd = { id: 1 };
  // apply mutation
  CART_ADD_ITEM(state, productToAdd);
  // assert result
  expect(state.list.length).toBe(1);
});

test('CART_REMOVE_ITEM', () => {
  // mock state
  const state = {
    list: [{ id: 1, quantity: 1 }]
  };
  // apply mutation
  CART_REMOVE_ITEM(state, 1);
  // assert result
  expect(state.list.length).toBe(0);
});

test('CART_SET_ITEMS', () => {
  // mock state
  const state = {
    list: []
  };
  const productsToAdd = [{ id: 1, quantity: 1 }, { id: 2, quantity: 1 }];
  // apply mutation
  CART_SET_ITEMS(state, productsToAdd);
  // assert result
  expect(state.list.length).toBe(2);
});

test('CART_SET_CHECKOUT_STATUS', () => {
  // mock state
  const state = {
    list: [],
    checkoutStatus: null
  };
  // apply mutation
  CART_SET_CHECKOUT_STATUS(state, 'success');
  // assert result
  expect(state.checkoutStatus).toBe('success');
});

test('CART_INCREMENT_QUANTITY', () => {
  // mock state
  const state = {
    list: [{ id: 1, quantity: 1 }]
  };
  // apply mutation
  CART_INCREMENT_QUANTITY(state, 1);
  // assert result
  expect(state.list[0].quantity).toBe(2);
});

test('CART_DECREMENT_QUANTITY', () => {
  // mock state
  const state = {
    list: [{ id: 1, quantity: 2 }]
  };
  // apply mutation
  CART_DECREMENT_QUANTITY(state, 1);
  // assert result
  expect(state.list[0].quantity).toBe(1);
});

