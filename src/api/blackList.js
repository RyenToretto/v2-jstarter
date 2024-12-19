import { deepClone } from '@/utils'

export const requestBlackList = ({
  pkg,
  type,
  date,
  token,
  unionId,
  openId,

  sequence,
  orderBy,
  pageNum,
  pageSize
}) => {
  return window.axios.get('/wz/black/detail', {
    params: {
      pkg,
      type,
      date,
      token,
      unionId,
      openId,

      sequence,
      orderBy,
      pageNum,
      pageSize
    }
  })
}

export const requestBlackUpload = (formData, { pkg, type, desc }, onUploadProgress, signal) => {
  // formData {file}
  const isMock = window.location.href.includes('/mock')
  return window.axios.post(
    '/wz/black/upload',
    formData,
    deepClone(
      {
        headers: { 'Content-Type': 'multipart/form-data' },
        params: { pkg, type, desc },
        onUploadProgress: isMock ? null : onUploadProgress,
        signal
      },
      true
    )
  )
}
