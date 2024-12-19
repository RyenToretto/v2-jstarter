export default {
  namespaced: true,
  state: {
    mediationChannelCode: '',
    mediationChannelName: '',
    inDialog: {
      mediationChannelCode: '',
      mediationChannelName: ''
    }
  },
  mutations: {
    setMediationChannel(state, { code, name, syncToStore }) {
      state.mediationChannelCode = code
      state.mediationChannelName = name
      syncToStore && localStorage.setItem('mediationChannelCode', code)
    },
    setInDialogMediationChannel(state, { code, name }) {
      state.inDialog.mediationChannelCode = code
      state.inDialog.mediationChannelName = name
    }
  },
  actions: {
    setMediationChannel({ commit, rootState }, { code, syncToStore }) {
      const dic = rootState.dictionary.dictionary.DIC_MEDIATION_CHANNEL
      commit('setMediationChannel', {
        code,
        name: dic.codeToName[code],
        syncToStore
      })
    },
    setInDialogMediationChannel({ commit, rootState }, { code }) {
      const dic = rootState.dictionary.dictionary.DIC_MEDIATION_CHANNEL
      commit('setInDialogMediationChannel', {
        code,
        name: dic.codeToName[code]
      })
    }
  }
}
