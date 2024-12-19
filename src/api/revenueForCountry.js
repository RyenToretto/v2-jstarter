export default {
  getList(params) {
    return axios.get('/country/revenue', {
      params
    })
  }
}
