export default {
  getMessage(params) {
    return axios.get('/topics', {
      params
    })
  },
  send(payload) {
    return axios.post('/topics', payload)
  }
}
