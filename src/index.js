import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router.js';
import store from './store';
import "./css/tailwind.css";
import './js/intersectionObserver';
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/voting-20210202/databases/(default)/documents/";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
