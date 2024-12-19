export default {
  getOverseaTopList(params) {
    return axios.get('/material/oversea/top', {
      params
    })
  },
  // top10
  getTopList(params) {
    return axios.get('/material/top', {
      params
    })
  },
  // 素材列表
  getList(params) {
    return axios.get('/material', {
      params
    })
  },
  // 获取app列表
  getApps() {
    return axios.get('/material/app')
  }
}
