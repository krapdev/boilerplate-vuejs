import { mutations } from './product';

const { PRODUCT_DECREMENT_INVENTORY, PRODUCT_INCREMENT_INVENTORY } = mutations;

test('PRODUCT_INCREMENT_INVENTORY', () => {
  // mock state
  const state = {
    list: [{ id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 }]
  };
  // apply mutation
  PRODUCT_INCREMENT_INVENTORY(state, 1);
  // assert result
  expect(state.list[0].inventory).toBe(3);
});

test('PRODUCT_DECREMENT_INVENTORY', () => {
  // mock state
  const state = {
    list: [{ id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 }]
  };
  // apply mutation
  PRODUCT_DECREMENT_INVENTORY(state, 1);
  // assert result
  expect(state.list[0].inventory).toBe(1);
});
