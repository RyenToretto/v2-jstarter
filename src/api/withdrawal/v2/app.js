export const fetchListForNewUser = (params) => {
  return window.axios.get('/wz/report/app/stat/new', {
    params
  })
}
export const fetchListForDAU = (params) => {
  return window.axios.get('/wz/report/app/stat', {
    params
  })
}
// 基础拦截详情
export const fetchInterceptDetail = (params) => {
  return window.axios.get('/wz/report/app/stat/intercept/new', {
    params
  })
}
// 基础拦截详情DAU
export const fetchInterceptDetailForDAU = (params) => {
  return window.axios.get('/wz/report/app/stat/intercept', {
    params
  })
}
// 风控拦截详情
export const fetchRcInterceptDetail = (params) => {
  return window.axios.get('/wz/report/app/stat/intercept/rc/new', {
    params
  })
}
// 风控拦截详情DAU
export const fetchRcInterceptDetailForDAU = (params) => {
  return window.axios.get('/wz/report/app/stat/intercept/rc', {
    params
  })
}
// 提现失败详情
export const fetchWithdrawErrDetail = (params) => {
  return window.axios.get('/wz/report/app/stat/withdraw/err/new', {
    params
  })
}
// 提现失败详情DAU
export const fetchWithdrawErrDetailForDAU = (params) => {
  return window.axios.get('/wz/report/app/stat/withdraw/err', {
    params
  })
}
