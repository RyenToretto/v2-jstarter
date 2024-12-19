export default {
  getAllAccounts(sourceCode) {
    return axios.get('/channel/account', {
      params: {
        channelCode: sourceCode
      }
    })
  },
  getList(params) {
    return axios.get('/channel/rebate/config', {
      params
    })
  },
  addConfig(payload) {
    return axios.post('/channel/rebate/config', payload)
  },
  updateConfig(payload) {
    return axios.put('/channel/rebate/config', payload)
  },
  delConfig(id) {
    return axios.delete(`/channel/rebate/config/${id}`)
  }
}
