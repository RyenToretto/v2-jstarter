import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    allCountry: [],

    countryCode: '',
    countryName: '',
    inDialog: {
      countryCode: '',
      countryName: ''
    }
  },
  mutations,
  actions,
  getters
}
