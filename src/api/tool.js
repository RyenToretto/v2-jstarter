// 模拟点击
export const requestTestClick = (payload) => {
  return axios.post('/tools/click', payload)
}

export const requestClickInfo = ({
  pkg, // 投放平台 [必填]
  source, // 投放平台 [必填]
  ip,
  oaid
}) => {
  return axios.get('/tools/click', {
    params: {
      pkg, // 投放平台 [必填]
      source, // 投放平台 [必填]
      ip,
      oaid
    }
  })
}

export const requestSendActive = ({
  pkg,
  source,
  ip,
  oaid,
  cid, // [投放平台选择 巨量/广点通时, 必填]
  clickid, // [投放平台选择 巨量/广点通时, 必填]
  url // 点击链接 [投放平台选择 快手/百度时, 必填]
}) => {
  return axios.post('/tools/active', {
    pkg,
    source,
    ip,
    oaid,
    type: 'active',
    cid, // [投放平台选择 巨量/广点通时, 必填]
    clickid, // [投放平台选择 巨量/广点通时, 必填]
    url // 点击链接 [投放平台选择 快手/百度时, 必填]
  })
}

export const requestSendConversion = ({
  pkg,
  source,
  ip,
  oaid,
  cid, // [投放平台选择 巨量/广点通时, 必填]
  clickid, // [投放平台选择 巨量/广点通时, 必填]
  url, // 点击链接 [投放平台选择 快手/百度时, 必填]

  event // 转化目标
}) => {
  return axios.post('/tools/conversion', {
    pkg,
    source,
    ip,
    oaid,
    type: 'conversion',
    cid, // [投放平台选择 巨量/广点通时, 必填]
    clickid, // [投放平台选择 巨量/广点通时, 必填]
    url, // 点击链接 [投放平台选择 快手/百度时, 必填]

    event // 转化目标
  })
}

export const requestSendHistory = ({
  pkg, // 产品包名
  source, // 投放平台
  type, // 类型

  pageNum,
  pageSize,
  orderBy,
  sequence
}) => {
  return axios.get('/tools/ac/history', {
    params: {
      pkg, // 产品包名
      source, // 投放平台
      type, // 类型

      pageNum,
      pageSize,
      orderBy,
      sequence
    }
  })
}
