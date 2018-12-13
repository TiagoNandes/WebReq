import Vue from 'vue'
import App from './App.vue'
import router from "./router";

require("../src/assets/css/Contact-Form-Clean.css");
require("../src/assets/css/Features-Boxed.css");
require("../src/assets/css/Footer-Basic.css");
require("../src/assets/css/Footer-Clean.css");
require("../src/assets/css/Login-Form-Clean.css");
require("../src/assets/css/Navigation-with-Button.css");
require("../src/assets/css/styles.css");
// require("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
// require("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.bundle.min.js");
//require("../src/assets/js/bs-animation.js");


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
