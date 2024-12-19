export const fetchAppGapList = (params) => {
  return window.axios.get('/tixian/revenue/gap/app', {
    params
  })
}
export const fetchAppGapForCsj = (params) => {
  return window.axios.get('/tixian/toutiao/last', {
    params
  })
}
export const fetchAidGapList = (params) => {
  return window.axios.get('/tixian/revenue/gap/aid', {
    params
  })
}
export const fetchAidGapTrend = (params) => {
  return window.axios.get('/tixian/show/gap/aid', {
    params
  })
}
export const fetchAidFocusList = (params) => {
  return window.axios.get('/tixian/revenue/gap/aid/focus', {
    params
  })
}
