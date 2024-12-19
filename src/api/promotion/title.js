export default {
  getTitleList(params) {
    return axios.get('/promotion/tt/title', {
      params
    })
  },
  addTitle(payload) {
    return axios.post('/promotion/tt/title', payload)
  },
  updateTitle(payload) {
    return axios.put(`/promotion/tt/title/${payload.id}`, payload)
  },
  delTitle(id) {
    return axios.delete(`/promotion/tt/title/${id}`)
  }
}
