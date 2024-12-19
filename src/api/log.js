export default {
  getList(params) {
    return axios.get('/operation/log', {
      params
    })
  }
}
