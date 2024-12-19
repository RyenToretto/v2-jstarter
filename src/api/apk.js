import { deepClone } from '@/utils'

export default {
  getList(params) {
    return axios.get('/apk/list', { params })
  },
  addApk(payload) {
    return axios.post('/apk', payload)
  },
  updateApk(payload) {
    return axios.put(`/apk/${payload.id}`, payload)
  },
  del(id) {
    return axios.delete(`/apk/${id}`)
  },
  uploadAPK(formData, onUploadProgress, signal) {
    // formData {apk}
    const isMock = window.location.href.includes('/mock')
    return axios.post(
      '/apk/upload',
      formData,
      deepClone(
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: isMock ? null : onUploadProgress,
          signal
        },
        true
      )
    )
  },
  requestSwitchAPKStatus({ id, status }) {
    return axios.put(`/apk/status/${id}?status=${status}`)
  },
  getApkVersions(params) {
    return axios.get('/apk/versions', {
      params
    })
  },
  getApkVersionsConfig(params) {
    return axios.get('/apk/version/config', {
      params
    })
  },
  upgradeConfig(payload) {
    return axios.put(`/apk/upgrade/${payload.id}`, payload)
  },
  // 通知优化师
  optimizerNotify(params) {
    return axios.get('/apk/publish/message', { params })
  }
}
