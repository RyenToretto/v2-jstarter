export const requestDataClearList = ({
  pkg,
  token,
  type,

  sequence,
  orderBy,
  pageNum,
  pageSize
}) => {
  return window.axios.get('/wz/testing/tool', {
    params: {
      pkg,
      token,
      type,

      sequence,
      orderBy,
      pageNum,
      pageSize
    }
  })
}

export const requestAddDataClear = ({ pkg, token, type }) => {
  return window.axios.post('/wz/testing/tool', { pkg, token, type })
}
