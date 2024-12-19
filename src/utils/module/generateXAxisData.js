import { date } from '@/filters'

export const DATE_VERSION_HOUR = 'USE_HOUR'
export const DATE_VERSION_DAY = 'USE_DAY'
export const DATE_VERSION_MONTH = 'USE_MONTH'

function generateXAxisDateList(seriesData, startTime, endTime, timeVersion = '') {
  let tVersion = ''

  const parseDate = (str) => {
    const parts = str.split(' ')
    if (parts.length === 2) {
      tVersion = DATE_VERSION_HOUR
      return new Date(`${parts[0]} ${parts[1]}:00:00`)
    } else if (parts[0].length === 7) {
      if (tVersion !== DATE_VERSION_HOUR && tVersion !== DATE_VERSION_DAY) {
        tVersion = DATE_VERSION_MONTH
      }
      return new Date(`${parts[0]}-01 00:00:00`)
    } else {
      if (tVersion !== DATE_VERSION_HOUR) {
        tVersion = DATE_VERSION_DAY
      }
      return new Date(`${parts[0]} 00:00:00`)
    }
  }

  const sortDateList = (originDateList) => {
    if (!originDateList || !originDateList.length) {
      return []
    }
    return originDateList.sort((a, b) => parseDate(a) - parseDate(b))
  }

  let newDateList = []
  for (const eachOriginData of seriesData) {
    if (!eachOriginData || !eachOriginData.data || !eachOriginData.data.length) {
      continue
    }
    for (const eachCell of eachOriginData.data) {
      let newDateStr = eachCell[0]
      if (newDateList.every((e) => e !== newDateStr)) {
        newDateList.push(newDateStr)
      }
    }
  }

  newDateList = sortDateList(newDateList)
  if (
    newDateList &&
    newDateList.length &&
    [DATE_VERSION_HOUR, DATE_VERSION_DAY, DATE_VERSION_MONTH].includes(tVersion)
  ) {
    if (tVersion === DATE_VERSION_HOUR) {
      newDateList = newDateList.map((e) => window.dayjs(parseDate(e)).format('YYYY-MM-DD HH'))
    } else if (tVersion === DATE_VERSION_MONTH) {
      newDateList = newDateList.map((e) => window.dayjs(parseDate(e)).format('YYYY-MM'))
    } else {
      newDateList = newDateList.map((e) => window.dayjs(parseDate(e)).format('YYYY-MM-DD'))
    }
    return newDateList
  }

  const data = []
  const MS_PER_HOUR = 3600000 // 每小时的毫秒数
  const MS_PER_MONTH = 30 * window.MS_PER_DAY // 每月的毫秒数（近似）
  if (timeVersion === DATE_VERSION_HOUR) {
    const hoursDiff = Math.floor((endTime - startTime) / MS_PER_HOUR)
    for (let i = 0; i <= hoursDiff; i++) {
      data.push(date(startTime + i * MS_PER_HOUR, 'YYYY-MM-DD HH'))
    }
  } else if (timeVersion === DATE_VERSION_MONTH) {
    const monthsDiff = Math.floor((endTime - startTime) / MS_PER_MONTH)
    for (let i = 0; i <= monthsDiff; i++) {
      data.push(date(startTime + i * MS_PER_MONTH, 'YYYY-MM'))
    }
  } else {
    const daysDiff = Math.floor((endTime - startTime) / window.MS_PER_DAY)
    for (let i = 0; i <= daysDiff; i++) {
      data.push(date(startTime + i * window.MS_PER_DAY))
    }
  }
  return data
}
export default generateXAxisDateList
