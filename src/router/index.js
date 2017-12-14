import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Signup from '@/components/Auth/Signup';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
