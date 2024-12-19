export default {
  getList(params) {
    return axios.get('/business/monitor', {
      params
    })
  },
  getCount() {
    return axios.get('/business/monitor/count')
  }
}
