export default {
  getList(params) {
    return axios.get('/promotion/tt/title/category', {
      params
    })
  },
  addTitleCategory(payload) {
    return axios.post('/promotion/tt/title/category', payload)
  },
  updateTitleCategory(payload) {
    return axios.put(`/promotion/tt/title/category/${payload.id}`, payload)
  },
  delTitleCategory(id) {
    return axios.delete(`/promotion/tt/title/category/${id}`)
  }
}
