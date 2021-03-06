// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Global from './components/Global';
import router from './router';
import colorDirective from './directives/color';

Vue.config.productionTip = false;
Vue.component('global-component', Global);
Vue.directive('colored', colorDirective);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
