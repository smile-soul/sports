import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import leftbar from './modules/leftbar'


Vue.use(Vuex)


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user,
    leftbar,
  },
})
