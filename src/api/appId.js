export default {
  getList(params) {
    return axios.get('/appid', {
      params
    })
  },
  addAppId(payload) {
    return axios.post('/appid', payload)
  },
  updateAppId(payload) {
    return axios.put(`/appid/${payload.id}`, payload)
  },
  del(id) {
    return axios.delete(`/appid/${id}`)
  },
  getAllApps() {
    return axios.get('/appid/name')
  }
}
