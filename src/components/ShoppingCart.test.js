import VueFilters from '@/filters';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ShoppingCart from './ShoppingCart';
// import * as actions from '@/store/actions';

const localVue = createLocalVue();

localVue.use(VueFilters);
localVue.use(Vuex);

describe('ShoppingCart.vue', () => {
  let store;
  let actions;
  beforeEach(() => {
    actions = {
      checkout: jest.fn()
    };
    store = new Vuex.Store({
      state: {
        product: {
          list: [{ id: 1, title: 'Samsung Galaxy S8/S8 Plus', price: 642.5384, inventory: 2 }]
        },
        cart: {
          list: [{ id: 1, quantity: 1 }]
        }
      },
      actions
    });
  });
  test('call `checkout` on ShoppingCart-btn-checkout button click', () => {
    const wrapper = mount(ShoppingCart, { store, localVue });
    const button = wrapper.find('.ShoppingCart-btn-checkout');
    button.trigger('click');
    expect(actions.checkout).toHaveBeenCalled();
  });
});

