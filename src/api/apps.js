export default {
  getList(params) {
    return axios.get('/app', {
      params
    })
  },
  addApp(payload) {
    return axios.post('/app', payload)
  },
  updateApp(payload) {
    return axios.put(`/app/${payload.id}`, payload)
  },
  del(id) {
    return axios.delete(`/app/${id}`)
  },
  // 应用下拉列表
  getAllApps() {
    return axios.get('/app/name')
  },
  // 获取产品事件列表
  getEventList(pkg) {
    return axios.get('/app/event', {
      params: {
        pkg
      }
    })
  },
  // 获取产品版本
  getAppVersion(pkg) {
    return axios.get('/app/appvn', {
      params: {
        pkg
      }
    })
  },
  // 给用户授于APP权限
  authorization(payload) {
    return axios.post('/app/users', payload)
  },
  removeAuthorization(payload) {
    return axios.post('/app/users/cancel', payload)
  },

  // 获取自归因配置
  getAttributionConfig(params) {
    return axios.get('/app/source', {
      params
    })
  },
  // 修改自归因配置
  updateAttributionConfig(payload) {
    return axios.post('/app/source', payload)
  },
  updateAbTest(payload) {
    return axios.post('/app/abtest', payload)
  }
}
