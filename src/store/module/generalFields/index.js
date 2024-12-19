import { requestGroupList } from '@/modules/system/generalConfig/_api/field'
export default {
  namespaced: true,
  state: {
    fields: []
  },
  mutations: {
    setFields(state, payload) {
      state.fields = payload || []
    }
  },
  actions: {
    fetchAllFields({ commit }, params) {
      const data = Object.assign(
        {
          pageNum: 1,
          pageSize: 9999
        },
        params
      )
      requestGroupList(data).then((res) => {
        commit('setFields', res)
      })
    }
  },
  modules: {}
}
