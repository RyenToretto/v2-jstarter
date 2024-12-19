export default {
  getList(params) {
    return axios.get('/union/site', {
      params
    })
  }
}
