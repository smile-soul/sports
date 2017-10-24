import { LEFTBAR_SWITCH } from '../mutation-types'


const state = JSON.parse(localStorage.getItem('leftbar')) || { wide: true }


const actions = {
  [LEFTBAR_SWITCH]({ commit }, payload) {
    localStorage.setItem('leftbar', JSON.stringify(payload.leftbar))
    commit(LEFTBAR_SWITCH, payload.leftbar)
  },
}

const mutations = {
  [LEFTBAR_SWITCH](state, leftbar) {
    Object.assign(state, leftbar)
  },
}

export default {
  state,
  actions,
  mutations,
}
