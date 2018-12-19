import Vue from 'vue'
import VeeValidate from 'vee-validate';

import { router } from './_helpers';
import { store } from './_store';
import App from './App.vue'

require('../src/assets/css/Contact-Form-Clean.css');
require('../src/assets/css/Features-Boxed.css');
require('../src/assets/css/Footer-Basic.css');
require('../src/assets/css/Footer-Clean.css');
require('../src/assets/css/Login-Form-Clean.css');
require('../src/assets/css/Navigation-with-Button.css');
require('../src/assets/css/styles.css');

Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
