import api from '@/api/source'
import revenueSource from './revenueSource'
import maps from '@/maps'
import state from '../../state'
/**
 * 排序渠道列表，把常用渠道放前边
 * @param {Array} data 原始source数组
 */
function sortPromotionSource(data) {
  // 常用国内渠道
  const internalSource = ['csj', 'gdt', 'ks', 'baidu']
  // 常用海外渠道
  const overseaSource = ['google', 'ios', 'tiktok', 'facebook']
  const source = state.oversea ? overseaSource : internalSource
  source.forEach((v, index) => {
    const matchedSource = data.find((d) => d.code === v)
    if (matchedSource) {
      const matchedSourceIndex = data.findIndex((d) => d.code === v)
      // console.log('matchedSourceIndex', matchedSourceIndex, 'index:', index, 'matchedSource:', matchedSource)
      data.splice(index, 0, ...data.splice(matchedSourceIndex, 1))
    }
  })
}

export default {
  namespaced: true,
  state: {
    allSource: [],
    revenueSource
  },
  mutations: {
    setAllSource(state, payload) {
      sortPromotionSource(payload)
      state.allSource = payload
    }
  },
  actions: {
    getAllSource({ commit }) {
      return new Promise((resolve, reject) => {
        api.getAllSource().then((res) => {
          const list = res.lists || []
          commit('setAllSource', list)

          // 映射到 maps
          const codeToName = {}
          // const pkgToName = {}
          // const pkgToIcon = {}
          list.forEach((v) => {
            codeToName[v.code] = v.name
          })
          maps.source.list = codeToName
          resolve()
        })
      })
    }
  }
}
