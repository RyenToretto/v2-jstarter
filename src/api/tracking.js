export default {
  getList(params, dim = 'campaign') {
    return axios.get(`/${dim}`, {
      params
    })
  },
  getInventoryData(params, dim = 'campaign') {
    return axios.get(`/${dim}/inventory`, {
      params
    })
  },
  getCreative(id) {
    return axios.get(`/creative/material/${id}`)
  },
  getRoiDetail(params) {
    // 取消AppType=付费产品的逻辑，所有产品都用/roi/detail接口查询
    const url = '/roi/detail'
    return axios.get(url, {
      params
    })
  },
  getRoiHourly(params, reportType) {
    let url = '/roi/app24/'
    switch (reportType) {
      case 'app':
        url = '/roi/app24/'
        break
      case 'advertiser':
        url = '/roi/app24/advertiser'
        break
      case 'optimizer':
        url = '/roi/app24/optimizer'
        break
      case 'campaign':
        url = '/roi/app24/campaign'
        break
      case 'ad':
        url = '/roi/app24/ad'
        break
    }
    return axios.get(url, {
      params
    })
  },
  // 产品版本分布
  getAliveAppVersion(params) {
    return axios.get(`/app/vn`, {
      params
    })
  },
  // 批量修改广告计划操作状态
  changeAdOptStatus(payload) {
    return axios.put('/ad/update/status', payload)
  },
  getCompensation(params) {
    return axios.get('/ad/compensation', {
      params
    })
  }
}
