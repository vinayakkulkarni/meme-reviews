import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
