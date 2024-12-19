import { getRealType } from '@/utils'

// 事件日志
export default {
  queryLog(params) {
    return axios.get('/events/list', {
      params
    })
  },
  requestEventsDistribution(params) {
    return axios.get('/events/distribution', {
      params
    })
  },
  getSugByKey(params) {
    let date = ''
    if (params && params.date) {
      const regExp = /^\d{4}-\d{2}-\d{2}$/
      const originStart = params.date[0] || ''
      const originEnd = params.date[1] || ''
      date = [originStart, originEnd]

      // 如果是2024-07-04这种格式, 则转化成时间戳
      if (originStart && getRealType(originStart) === 'string' && regExp.test(originStart)) {
        date[0] = new Date(`${originStart} 00:00:00`).getTime()
      }
      if (originEnd && getRealType(originEnd) === 'string' && regExp.test(originEnd)) {
        date[1] = new Date(`${originEnd} 23:59:59`).getTime()
      }
    }

    return axios.get('/events/all/values', {
      params: {
        ...params,
        date
      }
    })
  }
}
