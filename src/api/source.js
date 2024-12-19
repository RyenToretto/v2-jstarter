export default {
  getList(params) {
    return axios.get('/source', {
      params
    })
  },
  getAllSource() {
    return axios.get('/source', {
      pageNum: 1,
      pageSize: 999,
      orderBy: 'createTime',
      sequence: 'descending'
    })
  },
  addSource(payload) {
    return axios.post('/source', payload)
  },
  updateSource(payload) {
    return axios.put(`/source/${payload.id}`, payload)
  },
  del(id) {
    return axios.delete(`/source/${id}`)
  },
  getAllSources() {
    return axios.get('/source/name')
  }
}
