export default {
  getList(params) {
    return axios.get('/optimizer', {
      params
    })
  }
}
