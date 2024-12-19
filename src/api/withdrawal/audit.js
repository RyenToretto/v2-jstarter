export const requestWithdrawalConfig = ({ pkg }) => {
  return window.axios.get('/wz/withdrawal/audit/config', { params: { pkg } })
}

export const requestWithdrawalAuditList = ({
  pkg,
  status,
  date,
  vdId,

  sequence,
  orderBy,
  pageNum,
  pageSize
}) => {
  return window.axios.get('/wz/withdrawal/audit/list', {
    params: {
      pkg,
      status,
      date,
      vdId,

      sequence,
      orderBy,
      pageNum,
      pageSize
    }
  })
}

export const requestAuditWithdrawal = ({ id, pkg, status, remark }) => {
  return window.axios.put('/wz/withdrawal/audit', {
    id,
    pkg,
    status,
    remark
  })
}
