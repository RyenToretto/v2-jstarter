export default {
  getList(params) {
    return axios.get('/material/data', {
      params
    })
  }
}
