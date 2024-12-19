export default {
  getList(params) {
    return axios.get('/advertiser', {
      params
    })
  }
}
