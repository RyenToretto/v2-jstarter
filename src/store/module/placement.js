import api from '@/api/app/placementType'
import placementApi from '@/api/app/placement'
import maps from '@/maps'

export default {
  namespaced: true,
  state: {
    placementId: '',
    placementName: '',
    allPlacement: [],
    placementTypeId: '',
    placementTypeCode: '',
    placementTypeName: '',
    allPlacementType: [],
    inDialog: {
      placementId: '',
      placementName: '',
      placementTypeId: '',
      placementTypeCode: '',
      placementTypeName: ''
    }
  },
  mutations: {
    setAllPlacement(state, { allPlacement }) {
      state.allPlacement = allPlacement
    },
    setPlacement(state, { value, syncToStore }) {
      state.placementId = value
      state.placementName = maps.placement.idToName[state.placementId]

      syncToStore && localStorage.setItem('placementId', state.placementId)
    },
    setInDialogPlacement(state, { value }) {
      state.inDialog.placementId = value
      state.inDialog.placementName = maps.placement.idToName[state.inDialog.placementId]
    },

    setAllPlacementType(state, { allPlacementType }) {
      state.allPlacementType = allPlacementType
    },
    setPlacementType(state, { value, valueKey, syncToStore }) {
      if (valueKey === 'id') {
        state.placementTypeId = value
        state.placementTypeCode = maps.placement.type.idToCode[value]
      } else {
        state.placementTypeCode = value
        state.placementTypeId = maps.placement.type.codeToId[value]
      }
      state.placementTypeName = maps.placement.type.idToName[state.placementTypeId]
      syncToStore && localStorage.setItem('placementTypeId', state.placementTypeId)
      syncToStore && localStorage.setItem('placementTypeCode', state.placementTypeCode)
    },
    setInDialogPlacementType(state, { value, valueKey }) {
      if (valueKey === 'id') {
        state.inDialog.placementTypeId = value
        state.inDialog.placementTypeCode = maps.placement.type.idToCode[value]
      } else {
        state.inDialog.placementTypeCode = value
        state.inDialog.placementTypeId = maps.placement.type.codeToId[value]
      }
      state.inDialog.placementTypeName =
        maps.placement.type.idToName[state.inDialog.placementTypeId]
    }
  },
  actions: {
    getAllPlacement({ commit }) {
      return new Promise((resolve) => {
        placementApi
          .requestAllPlacement()
          .then((allPlacement) => {
            commit('setAllPlacement', { allPlacement })
            const idToName = {}
            allPlacement.forEach((v) => {
              idToName[v.id] = v.name
            })
            maps.placement.idToName = idToName
            resolve(allPlacement)
          })
          .catch((e) => resolve(e))
      })
    },
    setPlacement({ commit }, { value, syncToStore }) {
      commit('setPlacement', { value, syncToStore })
    },
    setInDialogPlacement({ commit }, { value }) {
      commit('setInDialogPlacement', { value })
    },

    getAllPlacementType({ commit }) {
      return new Promise((resolve) => {
        api
          .requestAllPlacementType()
          .then((allPlacementType) => {
            commit('setAllPlacementType', { allPlacementType })
            const idToName = {}
            const idToCode = {}
            const codeToId = {}
            allPlacementType.forEach((v) => {
              idToName[v.id] = v.name
              idToCode[v.id] = v.code
              codeToId[v.code] = v.id
            })
            maps.placement.type.idToName = idToName
            maps.placement.type.idToCode = idToCode
            maps.placement.type.codeToId = codeToId
            resolve(allPlacementType)
          })
          .catch((e) => resolve(e))
      })
    },
    setPlacementType({ commit }, { value, valueKey, syncToStore }) {
      commit('setPlacementType', { value, valueKey, syncToStore })
    },
    setInDialogPlacementType({ commit }, { value, valueKey }) {
      commit('setInDialogPlacementType', { value, valueKey })
    }
  }
}
