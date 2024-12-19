/**
 * 媒体包
 */
import api from '@/api/unionGroup'
export default {
  namespaced: true,
  state: {
    pkg: localStorage.getItem('UNION-GROUP_PKG') || '',
    pageSize: Number(localStorage.getItem('UNION-GROUP_PAGE_SIZE')) || 20,
    allGroup: []
  },
  mutations: {
    setPageSize(state, ps) {
      ps = Number(ps)
      state.pageSize = ps
      localStorage.setItem('UNION-GROUP_PAGE_SIZE', ps)
    },
    setPKG(state, pkg) {
      state.pkg = pkg
      localStorage.setItem('UNION-GROUP_PKG', pkg)
    },
    setAllGroup(state, payload) {
      state.allGroup = payload
    }
  },
  actions: {
    getAllGroup({ commit }, payload) {
      return api.getAllGroup(payload).then((res) => {
        commit('setAllGroup', res)
      })
    }
  }
}
