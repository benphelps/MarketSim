import Vue from 'vue'
import Vuex from 'vuex'
import symbols from './modules/symbols'
import companies from './modules/companies'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    symbols,
    companies
  }
})
