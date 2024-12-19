import { getCountryList } from '@/api/country'
import countryData from './countryData'
export default {
  namespaced: true,
  state: {
    allCountries: countryData,
    // 通过接口动态插入，勿动
    list: []
  },
  mutations: {
    SET_COUNTRY(state, payload) {
      state.list = payload
    }
  },
  actions: {
    GET_COUNTRY({ commit }, payload) {
      getCountryList(payload).then((list) => {
        commit('SET_COUNTRY', list)
      })
    }
  }
}
