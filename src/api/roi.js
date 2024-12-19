export default {
  getList(params) {
    return axios.get('/roi/summary', {
      params
    })
  },
  getChartData(params) {
    return axios.get('/roi/chart', {
      params
    })
  },
  getAppCompareData(params) {
    return axios.get('/roi/chart/compare', {
      params
    })
  }
}
