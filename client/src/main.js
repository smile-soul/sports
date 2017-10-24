import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import store from './store'
import routes from './routes'
import * as filters from './filters'


Vue.use(VueRouter)
Vue.use(ElementUI)

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// Routing logic
const router = new VueRouter({
  mode: 'history',
  routes,
})

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
