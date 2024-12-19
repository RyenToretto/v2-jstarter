import api from '@/api/rebates'
import maps from '@/maps'
export default {
  namespaced: true,
  state: {
    accountsList: []
  },
  mutations: {
    setAccounts(state, payload) {
      state.accountsList = payload
    }
  },
  actions: {
    getAllAccounts({ commit }, sourceCode) {
      return new Promise((resolve, reject) => {
        api.getAllAccounts().then((res) => {
          commit('setAllAccounts', res)
          // 映射到 maps
          const account = {}
          res.forEach((v) => {
            account[v.accountId] = v.name
          })
          maps.rebates.account = account
        })
      })
    }
  }
}
