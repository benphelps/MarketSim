const state = {
  subscribed: []
}

const getters = {
  subscribed(state) {
    return state.subscribed
  }
}

const actions = {
  subscribe({ commit }, symbol) {
    commit('pushSymbol', { name: symbol })
  },
  update({ commit }, trade) {
    commit('updateSymbol', { trade: trade })
  }
}

const mutations = {
  pushSymbol(state, { name }) {
    const symbol = state.subscribed.find(s => s.name == name)
    if (!symbol) {
      state.subscribed.push({
        name: name,
        data: { },
        active: false
      })
    }
  },
  updateSymbol(state, { trade }) {
    const symbol = state.subscribed.find(s => s.name == trade.symbol)
    if (symbol) {
      symbol.data = trade
      symbol.active = true
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
