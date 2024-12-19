export default {
  getList(params) {
    return axios.get('/launch/app', {
      params
    })
  },
  getChart(params) {
    return axios.get('/launch/app/chart', {
      params
    })
  },
  getHourCost(params) {
    return axios.get('/app/hourCost', {
      params
    })
  }
}
