export default {
  getList(params) {
    return axios.get('/app/revenue/enter', {
      params
    })
  },
  addItem(payload) {
    return axios.post('/app/revenue/enter', payload)
  },
  updateItem(payload) {
    return axios.put(`/app/revenue/enter/${payload.id}`, payload)
  },
  delItem(id) {
    return axios.delete(`/app/revenue/enter/${id}`)
  }
}
