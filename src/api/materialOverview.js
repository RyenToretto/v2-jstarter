export default {
  // 总新增统计信息
  requestLatestOverviewData(params) {
    return axios.get('/material/stat', { params })
  },

  // 产品新增统计列表
  requestListMaterialIncrement(params) {
    return axios.get('/material/stat/detail', { params })
  }
}
