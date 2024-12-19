export const fetchList = (params) => {
  let url = '/wz/report/app/vd/stat'
  if (params.groupBy === 'day') {
    url = '/wz/report/app/vd/stat/day'
  }
  if (params.groupBy === 'vd' && params.orderBy === 'dataDate') {
    params.orderBy = ''
  }
  return window.axios.get(url, {
    params
  })
}
