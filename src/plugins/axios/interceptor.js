// import qs from 'qs'
import { Message, MessageBox } from 'element-ui'
import { analysis, doEnv, getRealType } from '@/utils'
// const { Message, MessageBox } = ELEMENT
function normalHandler(response, options) {
  // 判断是否为mock数据
  const isMock = response.request.match
  const _dataKey = ['post', 'put', 'patch'].includes(response.config.method) ? 'data' : 'params'
  let reqData = response.config[_dataKey]
  const _type = getRealType(reqData)
  if (_type === 'string') {
    try {
      reqData = JSON.parse(reqData)
    } catch (e) {}
  }
  // 控制台输出模拟数据
  /* eslint-disable no-console */
  isMock &&
    console.log(
      `%c${response.config.method.toUpperCase()}%c ${response.config.url}`,
      'background:#666;color:#fff;padding:3px 5px; border-radius:5px;',
      'color: #09f;',
      reqData,
      response.data
    )
  return new Promise((resolve, reject) => {
    let CODE = null
    // 判断接口返回格式是否为Object
    if (Object.prototype.toString.call(response.data) !== '[object Object]') {
      reject(new Error('contentType error!'))
    }
    // 是否包含code字段
    if (!('code' in response.data)) {
      const error = new Error('code params inExistence !')
      Message({
        type: 'error',
        message: '数据异常'
      })
      reject(error)
    }
    CODE = response.data.code
    if (CODE === '0000') {
      // 正常返回
      resolve(response.data.result)
    } else if (CODE === '3001') {
      // const service = `${location.protocol}//${location.host}${location.pathname}${location.hash}`
      // 未登录
      // const redirectUrl = `${window.UUAP}/cas/login?service=${service}`
      const redirectUrl = `/cas${location.hash}`
      if (response.config.url === '/account/info') {
        window.location.href = redirectUrl
      } else {
        // eslint-disable-next-line
        MessageBox.confirm('您的登录状态已失效，请点击重试', '登录状态失效', {
          type: 'error',
          showClose: false,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          confirmButtonText: '重试',
          cancelButtonText: '稍后'
        })
          .then(() => {
            if (doEnv.NODE_ENV === 'production') {
              window.location.href = redirectUrl
            } else {
              console.log(redirectUrl) // eslint-disable-line no-console
            }
          })
          .catch(() => {
            Message({
              type: 'error',
              message: '当前用户状态已失效，刷新页面之前请勿修改任何信息！',
              duration: 0
            })
          })
      }
      analysis(['sessionExpired', CODE, response.config.url])
      reject(response.data.message)
    } else if (CODE === '4001') {
      MessageBox.alert('抱歉，您没有相应权限！', '权限不足', {
        confirmButtonText: '知道了',
        type: 'error'
      })
        .then(() => {})
        .catch(() => {})
      reject(response.data.message)
    } else {
      // 其它错误
      Message({
        type: 'error',
        message: `${response.data.code}:${response.data.message}`
      })
      analysis(['apiException', CODE, response.config.url])
      reject(response.data.message)
    }
  })
}
function errorHandler(err) {
  if (err.response) {
    const doNotice = !(
      err.response.config && err.response.config.url.includes('/data/version.json')
    )
    doNotice &&
      Message({
        type: 'error',
        message: '服务异常: ' + err.response.status
      })
    analysis([
      'errorHandler',
      err.response.status,
      err.response.data &&
        [err.response.data.status, err.response.data.path, err.response.data.message].join(',')
    ])
  }
  return Promise.reject(err)
}

export { normalHandler, errorHandler }
