export default {
  getGroupList(params) {
    return axios.get('/flow/package', {
      params
    })
  },
  getGroupDetail(params) {
    return axios.get('/flow/package/detail', {
      params
    })
  },
  getAllGroup(params) {
    return axios.get('/flow/package/all', {
      params
    })
  },
  addGroup(payload) {
    return axios.post('/flow/package', payload)
  },
  updateGroup(payload) {
    return axios.put('/flow/package', payload)
  },
  delGroup(payload) {
    return axios.post('/flow/package/delete', payload)
  },
  reOpenGroup(payload) {
    return axios.post('/flow/package/undelete', payload)
  },
  pushUnionGroup(pkg) {
    return axios.get('/flow/package/publish', {
      params: {
        pkg
      }
    })
  },
  // 添加广告位到媒体包
  addToUnionGroup(payload) {
    return axios.post('/flow/package/rit', payload)
  }
}
