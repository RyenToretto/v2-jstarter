import api from '@/api/dataDictionary'
import apiItem from '@/api/dataDictionaryItem'

import { dictionaryConfig } from '@/config'
import { getRealType } from '@/utils'

export default {
  namespaced: true,
  state: {
    dictionary: {}
  },
  actions: {
    getDictionary({ commit, dispatch }) {
      return new Promise((resolve) => {
        api.requestAllDataDictionary().then((dictionaryList) => {
          if (getRealType(dictionaryList) === 'array') {
            commit('setDictionary', { dictionaryList })
            // dispatch('getDictionaryOptions', {
            //   code: []
            // })
            resolve(dictionaryList)
          } else {
            resolve([])
          }
        })
      })
    },
    getDictionaryOptions({ commit }, { code }) {
      return new Promise((resolve) => {
        apiItem
          .requestDictionaryOptions({
            code: getRealType(code) === 'array' ? code.join(',') : code
          })
          .then((optionsMap) => {
            if (getRealType(optionsMap) === 'object') {
              commit('setDictionaryOptions', { optionsMap })
              resolve(optionsMap)
            } else {
              resolve({})
            }
          })
      })
    },
    pageDeleteDictionary({ commit, dispatch }, { code }) {
      return new Promise((resolve) => {
        commit('deleteDictionary', { code })
        resolve({ code })
      })
    },
    pageUpdateDictionary({ commit, dispatch }, { code, name }) {
      return new Promise((resolve) => {
        commit('updateDictionary', { code, name })
        resolve({ code, name })
      })
    },
    pageAddDictionaryOption({ commit, dispatch }, { dictionaryCode, code, name }) {
      return new Promise((resolve) => {
        commit('addDictionaryOption', { dictionaryCode, code, name })
        resolve({ dictionaryCode, code, name })
      })
    },
    pageDeleteDictionaryOption({ commit, dispatch }, { dictionaryCode, code }) {
      return new Promise((resolve) => {
        commit('deleteDictionaryOption', { dictionaryCode, code })
        resolve({ dictionaryCode, code })
      })
    },
    pageUpdateDictionaryOption({ commit, dispatch }, { dictionaryCode, code, name }) {
      return new Promise((resolve) => {
        commit('updateDictionaryOption', { dictionaryCode, code, name })
        resolve({ dictionaryCode, code, name })
      })
    }
  },
  mutations: {
    setDictionary(state, { dictionaryList }) {
      dictionaryList.forEach((d) => {
        if (!state.dictionary[d.code]) {
          state.dictionary[d.code] = {
            options: [],
            codeToName: {},
            codeToClass: {}
          }
        }
        state.dictionary[d.code] = {
          ...state.dictionary[d.code],
          ...d
        }
      })
    },
    setDictionaryOptions(state, { optionsMap }) {
      Object.keys(optionsMap).forEach((code) => {
        if (!state.dictionary[code]) {
          state.dictionary[code] = {
            options: [],
            codeToName: {},
            codeToClass: {}
          }
        }
        if (getRealType(optionsMap[code]) === 'array') {
          state.dictionary[code].options = optionsMap[code]
          optionsMap[code].forEach((each) => {
            state.dictionary[code].codeToName[each.code] = each.name
            state.dictionary[code].codeToClass[each.code] =
              dictionaryConfig[code].optionsMap[each.code].extraClass
          })
        }
      })
    },
    updateDictionary(state, { code, name }) {
      if (!state.dictionary[code]) {
        state.dictionary[code] = {
          options: [],
          codeToName: {},
          codeToClass: {}
        }
      }
      state.dictionary[code] = {
        ...state.dictionary[code],
        code,
        name
      }
    },
    deleteDictionary(state, { code }) {
      delete state.dictionary[code]
    },
    addDictionaryOption(state, { dictionaryCode, code, name }) {
      if (!state.dictionary[dictionaryCode]) {
        state.dictionary[dictionaryCode] = {
          options: [],
          codeToName: {},
          codeToClass: {}
        }
      }
      state.dictionary[dictionaryCode].options.push({ code, name })
      state.dictionary[dictionaryCode].codeToName[code] = name
    },
    deleteDictionaryOption(state, { dictionaryCode, code }) {
      if (!state.dictionary[dictionaryCode]) {
        return
      }
      state.dictionary[dictionaryCode].options = state.dictionary[dictionaryCode].options.filter(
        (item) => item.code !== code
      )
      delete state.dictionary[dictionaryCode].codeToName[code]
      delete state.dictionary[dictionaryCode].codeToClass[code]
    },
    updateDictionaryOption(state, { dictionaryCode, code, name }) {
      if (!state.dictionary[dictionaryCode]) {
        return
      }
      const index = state.dictionary[dictionaryCode].options.findIndex((item) => item.code === code)
      state.dictionary[dictionaryCode].options[index].name = name
      state.dictionary[dictionaryCode].codeToName[code] = name
      state.dictionary[dictionaryCode].codeToClass[code] = name
    }
  }
}
