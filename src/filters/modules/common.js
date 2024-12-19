import { formatOnlyMin, formatSeconds, hour2Day } from '@/utils'

/**
 *
 * @param {String | Number} code 映射对象中的key值
 * @param {Object} obj 枚举对象
 * @returns {String} 枚举对象中的value
 */
export function mapKeyToValue(code, obj) {
  const codeList = Object.keys(obj)
  const _code = String(code)
  if (codeList.includes(_code)) {
    return obj[_code]
  } else {
    return code
  }
}

// 替换空值
export const emptyReplace = (value, replaceText = '-') => {
  if (value === '' || value === null || value === undefined) {
    return replaceText
  }
  return value
}

// 日期
export const date = (str, format = 'date') => {
  let date = new Date(str)
  let dateStr = ''
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  if (new Date(date).toString() === 'Invalid Date' || !str) {
    return ''
  }
  month < 10 && (month = '0' + month)
  day < 10 && (day = '0' + day)
  hour < 10 && (hour = '0' + hour)
  minute < 10 && (minute = '0' + minute)
  second < 10 && (second = '0' + second)
  switch (format) {
    case 'dateTime':
      dateStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`
      break
    default:
      dateStr = `${year}-${month}-${day}`
  }
  return dateStr
}

// 按指定格式输出日期
export const dateFormat = (str, format = 'yyyy-MM-dd') => {
  let date = new Date(str)
  let dateStr = ''
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  if (date.toString() === 'Invalid Date' || !str) {
    return ''
  }
  month < 10 && (month = '0' + month)
  day < 10 && (day = '0' + day)
  hour < 10 && (hour = '0' + hour)
  minute < 10 && (minute = '0' + minute)
  second < 10 && (second = '0' + second)

  dateStr = format
    .replace(/y{1,4}/i, year)
    .replace(/M{1,2}/, month)
    .replace(/d{1,2}/i, day)
    .replace(/h{1,2}/i, hour)
    .replace(/m{1,2}/, minute)
    .replace(/s{1,2}/i, second)
  return dateStr
}

/**
 * 相对时间
 * @param {Date} date 目标时间
 * @param {Date} relative 相对时间，默认为当前本地时间
 *
 * @returns n 小时前
 */
export const dateFrom = (date, relative = undefined) => {
  const dayjs = window.dayjs
  if (new Date(date).toString() === 'Invalid Date' || !date) {
    return ''
  }
  if (relative) {
    return dayjs(date).from(dayjs(relative))
  } else {
    return dayjs(date).fromNow()
  }
}

/**
 * 格式化无分隔符的日期格式
 * @param {string} strDate 字符串格式日期（如：'20230728'）
 * @param separator
 * @param doubleLine
 * @returns {string} 格式化后的日期字符串
 * '20230728' => '2023-07-28'
 */
export const strToDate = (strDate, separator = '-', doubleLine = false) => {
  const isYM = /^\d{6}$/.test(strDate)
  const isYMD = /^\d{8}$/.test(strDate)
  const isYMDH = /^\d{10}$/.test(strDate)

  // 年月日
  if (isYM) {
    return strDate
      .split(/(\d{4})(\d{2})/)
      .filter((v) => v)
      .join(separator)
  }

  // 年月日
  if (isYMD) {
    return strDate
      .split(/(\d{4})(\d{2})(\d{2})/)
      .filter((v) => v)
      .join(separator)
  }

  // 年月日时
  if (isYMDH) {
    const ymd = strDate
      .slice(0, -2)
      .split(/(\d{4})(\d{2})(\d{2})/)
      .filter((v) => v)
      .join(separator)
    const hfm = `${strDate.slice(-2)}:00:00`
    return doubleLine
      ? `<div class="name">${ymd}</div><div class="id">${hfm}</div>`
      : `${ymd} ${hfm}`
  }

  return strDate
}

export const labelWeekStr = (originStr) => {
  if (!originStr) {
    return originStr
  }

  const year = originStr.slice(0, 4)
  const week = originStr.slice(4)
  return `${year}第${week}周`
}

export const labelJson = (originStr) => {
  if (!originStr) {
    return originStr
  }

  try {
    return JSON.parse(originStr)
  } catch (e) {
    return originStr
  }
}

export const labelHour = (hours) => hour2Day(hours)

export const labelPastHour = (hours) => hour2Day(hours, '过去')

/**
 * 给数字加千位分隔符
 * @param {String | Number} num 原始数字
 * @returns {String} 逗号分割的字符串
 * @example 1234567.89 => 1,234,567.89
 */
export function thousandSeparator(num = '') {
  const strNum = String(num).split('.')
  const integerArray = []
  const _num = {
    sign: Number(num) >= 0 ? '' : '-',
    integer: `${Math.abs(strNum[0])}` || '',
    decimal: strNum[1] || ''
  }
  if (!/^(-)?\d+(\.\d+)?$/.test(num)) {
    return ''
  }
  for (let s = _num.integer.length; s >= 0; s -= 3) {
    const start = s - 3 >= 0 ? s - 3 : 0
    const end = s
    // console.log(start, end, _num.integer.slice(start, end))
    end > start && integerArray.unshift(_num.integer.slice(start, end))
  }
  return `${_num.sign}${integerArray.join(',')}${_num.decimal ? '.' + _num.decimal : ''}`
}

// 金额转化
export const money = (amount, decimalLength = 2, separator = false) => {
  const num = Number(amount)
  if (!/^-?\d+(.\d+)?(e(-)?\d+)?$/.test(amount)) {
    return amount
  }
  let formatAmount = num.toFixed(decimalLength)
  if (separator) {
    formatAmount = thousandSeparator(formatAmount)
  }
  return formatAmount
}

// 分转换成元
export const fenMoney = (amount, decimalLength = 2, separator = false) => {
  if (!amount) {
    return amount
  }
  const _num = (amount / 100).toFixed(2)
  return money(_num, decimalLength, separator)
}

/**
 * 整数转换
 * @param {String|Number} num 待转换数字
 * @param {Boolean} separator 是否用逗号分隔数字
 * @returns {String} 格式化后的整数字符串
 **/
export const integer = (num, separator = true) => money(num, 0, separator)

/**
 * 浮点数转换
 * @param {String|Number} num 待转换数字
 * @param {Number} decimalLength 小数位数
 * @param {Boolean} separator 是否用逗号分隔数字
 * @returns {String} 格式化后的浮点数字符串
 **/
export const float = (num, decimalLength = 2, separator = true) =>
  money(num, decimalLength, separator)

export const percent = (value, decimalLength = 2, showPercentSign = false) => {
  const num = Number(value)
  let pNum = num * 100
  if (isNaN(num) || [null, undefined, ''].includes(value)) {
    return ''
  }
  if (decimalLength === 'auto') {
    pNum = +pNum.toFixed(6)
  } else {
    pNum = pNum.toFixed(decimalLength)
  }
  return `${pNum}${showPercentSign ? '%' : ''}`
}

// html 去标签
export const htmlToStr = (value, sliceLength = 0, append = '...') => {
  if (!value || !value.replace) {
    return value
  }
  const result = value.replace(/<\/?[^<>]+>/g, '')
  if (sliceLength >= 1 && result.length > sliceLength) {
    return result.slice(0, sliceLength) + append
  }
  return result
}

export const secondsToHMS = (
  value,
  onlyMin = true,
  showH = true,
  sign = { h: ':', min: ':', s: '' }
) => {
  if (value && !Object.is(+value, NaN)) {
    if (onlyMin) {
      return formatOnlyMin(value)
    } else {
      return formatSeconds(value, showH, false, sign)
    }
  }
  return value
}

export const msToHMS = (value, showH = true, sign = { h: ':', min: ':', s: '' }) => {
  if (value && !Object.is(+value, NaN)) {
    return formatSeconds(value / 1000, showH, false, sign)
  }
  return value
}

export const usToHMS = (value, showH = true, sign = { h: ':', min: ':', s: '' }) => {
  if (value && !Object.is(+value, NaN)) {
    return formatSeconds(value / 1000000, showH, false, sign)
  }
  return value
}

// 文件大小（Bite）进行单位（KB、M、GB）的转换
export const fileSize = (byteSize, decimalLength = 2) => {
  if (byteSize === 0) {
    return '0 B'
  }
  if (!byteSize) {
    return '未知大小'
  }
  let size = ''
  if (byteSize < 0.1 * 1024) {
    // 如果小于0.1KB转化成B
    size = byteSize.toFixed(decimalLength) + 'B'
  } else if (byteSize < 0.1 * 1024 * 1024) {
    // 如果小于0.1MB转化成KB
    size = (byteSize / 1024).toFixed(decimalLength) + 'KB'
  } else if (byteSize < 0.1 * 1024 * 1024 * 1024) {
    // 如果小于0.1GB转化成MB
    size = (byteSize / (1024 * 1024)).toFixed(decimalLength) + 'MB'
  } else {
    // 其他转化成GB
    size = (byteSize / (1024 * 1024 * 1024)).toFixed(decimalLength) + 'GB'
  }
  const sizestr = size + ''
  const len = sizestr.indexOf('.')
  const dec = sizestr.substr(len + 1, decimalLength)
  if (dec === new Array(decimalLength).fill(0).join('')) {
    // 当小数点后为00时 去掉小数部分
    return sizestr.substring(0, len) + sizestr.substr(len + 3, decimalLength)
  }
  return sizestr
}

/**
 * 将一个数字转换为带单位的格式化字符串
 * @param {Number} num 需要格式化的数字
 * @param {Object} options 其它配置：
 *     decimal: 保留的小数位数，默认为0
 *     showPlus: 是否为带余数的数字显示加号，默认为true
 *     maxUnit: 使用的最大单位，默认为"B"（十亿）
 * @returns 格式化后的字符串
 */
export function unitNumber(num, { decimal = 0, showPlus = true, maxUnit = 'B' } = {}) {
  // 单位
  let unit = ''
  // 除数
  let divisor = 1
  // 非常规数字直接原样返回
  if (typeof num !== 'number' || isNaN(num)) {
    return num
  }

  if (num >= 1e9 && maxUnit === 'B') {
    unit = 'B'
    divisor = 1e9
  } else if (num >= 1e6 && ['B', 'M'].includes(maxUnit)) {
    unit = 'M'
    divisor = 1e6
  } else if (num >= 1e3 && ['B', 'M', 'K'].includes(maxUnit)) {
    unit = 'K'
    divisor = 1e3
  }
  // 格式化后的数字
  let formattedNum
  // 如果要显示加号则对数字进行向下取整，否则四舍五入
  if (showPlus) {
    formattedNum = Math.floor(num / divisor)
  } else {
    formattedNum = (num / divisor).toFixed(decimal)
  }
  // 用于存储分割后的数字和小数
  const parts = formattedNum.toString().split('.')
  // 数字是否有余数
  const hasRemainder = Boolean(num % divisor)
  // 加号内容
  const plus = showPlus && hasRemainder ? '+' : ''
  // 对整数部分做千分位格式化
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.') + unit + plus
}
