export const fetchList = (params) => {
  return window.axios.get('/wz/report/app/aid/stat', {
    params
  })
}
