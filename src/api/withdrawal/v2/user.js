export const fetchList = (params) => {
  let url = '/wz/report/app/user/stat'
  if (params.groupBy === 'day') {
    url = '/wz/report/app/user/stat/day'
  }
  if (params.groupBy === 'user' && params.orderBy === 'dataDate') {
    params.orderBy = ''
  }
  return window.axios.get(url, {
    params
  })
}
// 提现失败详情
export const fetchWithdrawErrDetail = (params) => {
  return window.axios.get('/wz/withdrawal/failed', {
    params
  })
}
