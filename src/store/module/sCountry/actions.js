import { SET_ALL_COUNTRY, SET_COUNTRY, SET_IN_DIALOG_COUNTRY } from './mutation-type'
import countryData from '../country/countryData'
import maps from '@/maps'

export default {
  async setAllCountry(actionContext) {
    return new Promise((resolve) => {
      actionContext.commit(SET_ALL_COUNTRY, countryData)
      const codeToName = {}
      if (countryData) {
        countryData.forEach((v) => {
          codeToName[v.id] = v.name
        })
      }
      maps.country.codeToName = codeToName
      resolve()
    })
  },
  setCountry(actionContext, { code, syncToStore }) {
    actionContext.commit(SET_COUNTRY, { code, syncToStore })
  },
  setInDialogCountry(actionContext, { code }) {
    actionContext.commit(SET_IN_DIALOG_COUNTRY, { code })
  }
}
