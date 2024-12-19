import categoryApi from '@/api/promotion/titleCategory'
export default {
  namespaced: true,
  state: {
    titleCategory: []
  },
  mutations: {
    setTitleCategory(state, payload) {
      state.titleCategory = payload
    }
  },
  actions: {
    getTitleCategory({ commit }, params = {}) {
      return new Promise((resolve, reject) => {
        categoryApi.getList(params).then((res) => {
          const list = res || []
          commit('setTitleCategory', list)
          resolve(list)
        })
      })
    }
  }
}
