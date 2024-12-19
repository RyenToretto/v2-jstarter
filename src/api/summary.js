export default {
  getList(params) {
    return axios.get('/revenue/summary', {
      params
    })
  },
  getChartData(params) {
    return axios.get('/revenue/chart', {
      params
    })
  },
  getAppCompareData(params) {
    return axios.get('/revenue/chart/compare', {
      params
    })
  },
  getSourceCompareData(params) {
    return axios.get('/revenue/chart/source', {
      params
    })
  },
  getMissingSourceData(params) {
    return axios.get('/revenue/chart/source/miss', {
      params
    })
  },
  getEntityList(params) {
    return axios.get('/revenue/entity', {
      params
    })
  }
}
