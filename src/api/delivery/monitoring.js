export default {
  getChart(params) {
    return axios.get('/monitoring', {
      params
    })
  }
}
