import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { normalHandler, errorHandler } from './interceptor'
import { deepClone, doEnv } from '@/utils'
const plugin = {}

const DEFAULT_OPTIONS = {}

plugin.install = (vue, options) => {
  const _options = Object.assign({}, DEFAULT_OPTIONS, options)
  const service = axios.create({
    baseURL: doEnv.VITE_APP_API_BASE_URL,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'comma' })
    }
  })
  service.interceptors.request.use(
    function (config) {
      filterEmptyProperty(config)
      if (/^\/api\/v\d+/.test(config.url)) {
        config.baseURL = ''
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use((response) => normalHandler(response, _options), errorHandler)
  window.axios = service
  vue.prototype.$axios = service
}
// 过滤请求参数中的空值
function filterEmptyProperty(config) {
  const conf = config
  const _dataKey = ['post', 'put', 'patch'].includes(conf.method) ? 'data' : 'params'
  const isOversea = sessionStorage.getItem('oversea') === 'true'
  if (_dataKey in conf) {
    conf[_dataKey] = deepClone(conf[_dataKey], true)
    // 全部接口增加isOversea参数
    if (
      !('isOversea' in conf[_dataKey]) &&
      Object.prototype.toString.call(conf[_dataKey]) === '[object Object]'
    ) {
      conf[_dataKey].isOversea = isOversea
    }
  } else {
    conf[_dataKey] = { isOversea }
  }
}
Vue.use(plugin, {})
export default plugin
