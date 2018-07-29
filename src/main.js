// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill";
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight,faCaretRight ,faWindowClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueHead from 'vue-head'
Vue.use(VueHead, {
  separator: ' | '
})

library.add(faArrowRight)
library.add(faCaretRight)
library.add(faWindowClose)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
