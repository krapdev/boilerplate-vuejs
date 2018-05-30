import Vue from 'vue';
import Router from 'vue-router';
import Shop from '@/components/Shop';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
});
