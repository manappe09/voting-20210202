import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
// import './scss/main.scss';
import "./css/tailwind.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
