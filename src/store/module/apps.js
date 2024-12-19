import api from '@/api/apps'
import appIdApi from '@/api/appId'
import maps from '@/maps'
export default {
  namespaced: true,
  state: {
    allApps: [],
    allRevenueApps: []
  },
  mutations: {
    setAllApps(state, payload) {
      state.allApps = payload
    },
    setAllRevenueApps(state, payload) {
      state.allRevenueApps = payload
    }
  },
  actions: {
    getAllApps({ commit }) {
      return new Promise((resolve, reject) => {
        api.getAllApps().then((res) => {
          commit('setAllApps', res)
          // 映射到 maps
          const idToIcon = {}
          const pkgToIcon = {}
          const idToName = {}
          const pkgToName = {}
          const pkgToId = {}
          const idToPkg = {}
          res.forEach((v) => {
            idToIcon[v.id] = v.icon
            idToName[v.id] = v.name
            pkgToName[v.pkg] = v.name
            pkgToId[v.pkg] = v.id
            idToPkg[v.id] = v.pkg
            if (v.icon) {
              pkgToIcon[v.pkg] = v.icon
            }
          })
          maps.apps.idToIcon = idToIcon
          maps.apps.pkgToIcon = pkgToIcon
          maps.apps.idToName = idToName
          maps.apps.pkgToName = pkgToName
          maps.apps.pkgToId = pkgToId
          maps.apps.idToPkg = idToPkg
          resolve()
        })
      })
    },
    // 收入相关产品列表
    getAllRevenueApps({ commit }) {
      return new Promise((resolve, reject) => {
        appIdApi.getAllApps().then((res) => {
          commit('setAllRevenueApps', res)
          // 映射到 maps
          // const idToName = {}
          // const pkgToName = {}
          // const pkgToIcon = {}
          // res.forEach(v => {
          //   idToName[v.id] = v.name
          //   pkgToName[v.pkg] = v.name
          //   pkgToIcon[v.pkg] = v.icon
          // })
          // maps.apps.idToName = idToName
          // maps.apps.pkgToName = pkgToName
          // maps.apps.pkgToIcon = pkgToIcon
        })
      })
    }
  }
}
