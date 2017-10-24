import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import leftbar from './modules/leftbar'
import lingdui from './modules/lingdui';


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    user,
    leftbar,
    lingdui,
  },
})
