import Vue from 'vue'
import App from './App.vue'
import router from "./router";


/*require('./assets/js/contact_me.js')
require('./assets/js/jqBootstrapValidation.js')
require('./assets/css/bootstrap3/js/bootstrap.js')
require('./assets/js/login-register.js')
require('./assets/js/bootstrap.js')
require('./assets/js/SmoothScroll.js')
require('./assets/js/nivo-lightbox.js')
//require('jquery')
var $ = require("jquery")(window);

/*
var _ = require('lodash');
var _ = require('webpack');
//window.$ = require('jquery')
//window.JQuery = require('jquery')
*/
//require('./assets/js/page.js')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
