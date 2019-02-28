const state = {
  all: { }
}

const getters = {
  fetch: (state) => (symbol) => {
    return state.all[symbol]
  }
}

const actions = {
  fetch({ commit }) {
    fetch('https://api.iextrading.com/1.0/ref-data/symbols').then(function(response) {
      response.json().then(function(data) {
        commit('loadCompanyData', { data: data })
      });
    })
  }
}

const mutations = {
  loadCompanyData(state, { data }) {
    for (var i = 0; i < data.length; i++) {
      let company = data[i]
      state.all[company.symbol] = company
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
