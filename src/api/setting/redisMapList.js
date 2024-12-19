export const requestRedisMapList = ({
  pkg,
  status,
  rkey,
  rvalue,
  info,

  sequence,
  orderBy,
  pageNum,
  pageSize
}) => {
  return window.axios.get('/app/rconfig', {
    params: {
      pkg,
      status,
      rkey,
      rvalue,
      info,

      sequence,
      orderBy,
      pageNum,
      pageSize
    }
  })
}

export const requestAddRedisMap = ({ pkg, rkey, rvalue, info, status }) => {
  return window.axios.post('/app/rconfig', { pkg, rkey, rvalue, info, status })
}

export const requestUpdateRedisMap = ({ id, pkg, rkey, rvalue, info, status }) => {
  return window.axios.put(`/app/rconfig/${id}`, { pkg, rkey, rvalue, info, status })
}

export const requestDeleteRedisMap = ({ id }) => {
  return window.axios.delete(`/app/rconfig/${id}`)
}

export const requestSwitchRedisMap = ({ id }, status) => {
  return window.axios.post(`/app/rconfig/status/${id}`, { status })
}
