export const fetchList = (params) => {
  return window.axios.get('/wz/report/app/ip/stat', {
    params
  })
}
