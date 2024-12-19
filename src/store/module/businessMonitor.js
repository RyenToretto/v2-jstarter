import api from '@/api/businessMonitor'
export default {
  namespaced: true,
  state: {
    duration: 3600000, // 请求间隔
    count: 0,
    noticeList: []
  },
  mutations: {
    SET_COUNT(state, count) {
      state.count = count
    },
    SET_LIST(state, payload) {
      state.noticeList = payload
    }
  },
  actions: {
    GET_NOTICE_LIST({ commit }, payload) {
      api.getList(payload).then((res) => {
        commit('SET_LIST', res)
      })
    },
    GET_NOTICE_COUNT({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .getCount()
          .then((res) => {
            commit('SET_COUNT', res || 0)
            resolve(res)
          })
          .catch((e) => {
            reject(e)
          })
      })
    }
  }
}
