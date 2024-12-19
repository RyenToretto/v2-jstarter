export default {
  getList(params) {
    return axios.get('/app/dai/liang', {
      params
    })
  }
}
