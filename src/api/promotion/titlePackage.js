export default {
  getList(params) {
    return axios.get('/promotion/tt/title/package', {
      params
    })
  },
  addTitlePackage(payload) {
    return axios.post('/promotion/tt/title/package', payload)
  },
  updateTitlePackage(payload) {
    return axios.put(`/promotion/tt/title/package/${payload.id}`, payload)
  },
  delTitlePackage(id) {
    return axios.delete(`/promotion/tt/title/package/${id}`)
  }
}
