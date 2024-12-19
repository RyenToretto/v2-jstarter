import { SET_ALL_COUNTRY, SET_COUNTRY, SET_IN_DIALOG_COUNTRY } from './mutation-type'
import maps from '@/maps'

export default {
  [SET_ALL_COUNTRY](state, payload) {
    state.allCountry = payload
  },
  [SET_COUNTRY](state, { code, syncToStore }) {
    state.countryCode = code
    state.countryName = maps.country.codeToName[code] || code

    syncToStore &&
      localStorage.setItem(
        'country',
        JSON.stringify({
          code: state.countryCode,
          name: state.countryName
        })
      )
  },
  [SET_IN_DIALOG_COUNTRY](state, { code }) {
    state.inDialog.countryCode = code
  }
}
