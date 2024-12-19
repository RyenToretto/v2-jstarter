export default {
  getList(params) {
    return axios.get('/event', {
      params
    })
  },
  addEvent(payload) {
    return axios.post('/event', payload)
  },
  updateEvent(payload) {
    return axios.put(`/event/${payload.id}`, payload)
  },
  del(id) {
    return axios.delete(`/event/${id}`)
  },
  copy(payload) {
    return axios.post('/event/copy', payload)
  },
  sort(payload) {
    return axios.post('/event/sort', payload)
  }
}
