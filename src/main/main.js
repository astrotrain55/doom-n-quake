import axios from 'axios';
import Vue from 'vue';
import store from '@/store/';

import App from './App';

Vue.http = Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
