import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import state from './state.js'

export default new Vuex.Store({
    mutations,
    actions,
    state,
})