import api from '@/api/app/channelPlacementType'
import maps from '@/maps'

export default {
  namespaced: true,
  state: {
    allChannelPlacementType: [],

    channelPlacementTypeId: '',
    channelPlacementType: '',
    channelPlacementTypeName: '',
    inDialog: {
      channelPlacementTypeId: '',
      channelPlacementType: '',
      channelPlacementTypeName: ''
    }
  },
  mutations: {
    setAllChannelPlacementType(state, { allChannelPlacementType }) {
      state.allChannelPlacementType = allChannelPlacementType
    },
    setChannelPlacementType(state, { value, valueKey, syncToStore }) {
      if (valueKey === 'id') {
        state.channelPlacementTypeId = value
        state.channelPlacementType = maps.channelPlacement.type.idToType[value]
      } else {
        state.channelPlacementType = value
        state.channelPlacementTypeId = maps.channelPlacement.type.typeToId[value]
      }
      state.channelPlacementTypeName =
        maps.channelPlacement.type.idToName[state.channelPlacementTypeId]
      syncToStore && localStorage.setItem('channelPlacementTypeId', state.channelPlacementTypeId)
      syncToStore && localStorage.setItem('channelPlacementType', state.channelPlacementType)
    },
    setInDialogChannelPlacementType(state, { value, valueKey }) {
      if (valueKey === 'id') {
        state.inDialog.channelPlacementTypeId = value
        state.inDialog.channelPlacementType = maps.channelPlacement.type.idToType[value]
      } else {
        state.inDialog.channelPlacementType = value
        state.inDialog.channelPlacementTypeId = maps.channelPlacement.type.typeToId[value]
      }
      state.inDialog.channelPlacementTypeName =
        maps.channelPlacement.type.idToName[state.inDialog.channelPlacementTypeId]
    }
  },
  actions: {
    getAllChannelPlacementType({ commit }) {
      return new Promise((resolve) => {
        api
          .requestAllChannelPlacementType()
          .then((allChannelPlacementType) => {
            commit('setAllChannelPlacementType', { allChannelPlacementType })
            const typeToName = {}
            const idToName = {}
            const idToType = {}
            const typeToId = {}
            allChannelPlacementType.forEach((v) => {
              typeToName[v.type] = v.name
              idToName[v.id] = v.name
              idToType[v.id] = v.type
              typeToId[v.type] = v.id
            })
            maps.channelPlacement.type.typeToName = typeToName
            maps.channelPlacement.type.idToName = idToName
            maps.channelPlacement.type.idToType = idToType
            maps.channelPlacement.type.typeToId = typeToId
            resolve(allChannelPlacementType)
          })
          .catch((e) => resolve(e))
      })
    },
    setChannelPlacementType({ commit }, { value, valueKey, syncToStore }) {
      commit('setChannelPlacementType', { value, valueKey, syncToStore })
    },
    setInDialogChannelPlacementType({ commit }, { value, valueKey }) {
      commit('setInDialogChannelPlacementType', { value, valueKey })
    }
  }
}
