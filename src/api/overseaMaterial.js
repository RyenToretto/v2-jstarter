export default {
  // 素材列表
  getList(params) {
    return axios.get('/material/oversea', {
      params
    })
  }
}
