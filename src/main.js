import Vue from 'vue';
import './plugins/vuetify'
import App from './Apps.vue';
import router from './router';
import store from './store';
import "./assets/app.css";
Vue.config.productionTip = false;
Vue.component('Sidemenu', require('./components/layout/sidemenu.vue').default);
Vue.component('Header', require('./components/layout/header.vue').default);
Vue.component('Modalleft', require('./components/layout/modalleft.vue').default);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
