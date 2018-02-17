// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFire from 'vuefire';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App';
import router from './router';

require('../node_modules/font-awesome/css/font-awesome.css');

Vue.use(VueFire);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
