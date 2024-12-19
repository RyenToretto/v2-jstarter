import { AK_BAIDU_PLAYER } from '@/config'
import { dateFormat } from '@/filters'
import getRealType from './getRealType'
import sortArrayByDateField from './sortArrayByDateField'
import deepClone from './deepClone'

export function isObjectLike(value) {
  return value !== null && typeof value === 'object'
}

export function baseGetTag(value) {
  const objectProto = Object.prototype
  const hasOwnProperty = objectProto.hasOwnProperty
  const toString = objectProto.toString
  const symToStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined

  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value)
  }
  const isOwn = hasOwnProperty.call(value, symToStringTag)
  const tag = value[symToStringTag]
  let unmasked = false
  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) {
    /* empty */
  }

  const result = toString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

export function toFriendlyArray(value) {
  if (!value && value !== 0) {
    return []
  }
  return [value, '' + value]
}

export function isArray(value) {
  return value && baseGetTag(value) === '[object Array]'
}

export function isObject(value) {
  const type = typeof value
  return !!value && (type === 'object' || type === 'function')
}

export function isNumber(value) {
  return (
    typeof value === 'number' || (isObjectLike(value) && baseGetTag(value) === '[object Number]')
  )
}

export function isString(value) {
  return (
    typeof value === 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) === '[object String]')
  )
}

export function isJSON(value) {
  if (!value) {
    return false
  }
  let ret = true
  try {
    JSON.parse(value)
  } catch (e) {
    ret = false
  }
  return ret
}

export function isUndefined(value) {
  return value === undefined
}

export function isNull(value) {
  return value === null
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value))
}

export function coerceNumberValue(value, fallbackValue) {
  return isNumberValue(value) ? Number(value) : fallbackValue
}

export const strReplaceAll = (originStr, oldStr, newStr) => {
  if (baseGetTag(originStr) === '[object String]') {
    return originStr.replace(new RegExp(oldStr, 'gm'), newStr)
  }
  return originStr
}

export function replaceHttpPrefix(value) {
  if (isString(value)) {
    return value.replace(/http.*:\/\/.+?\//g, '')
  } else {
    return value
  }
}

export function strArrToCommaStr(arr) {
  if (isArray(arr)) {
    return arr.join(',')
  } else {
    return arr
  }
}

export function commaStrToStrArr(str) {
  if (isString(str)) {
    return [...str.split(',')]
  } else {
    return str
  }
}

export const searchFolderById = (fList, fid, attrFound = 'id', attrChildren = 'children') => {
  if (!fList || !fList.length) {
    return
  }
  for (const indexFold of Object.keys(fList)) {
    if (fList[indexFold][attrFound] === fid) {
      return fList[indexFold]
    }
    const foundFold = searchFolderById(fList[indexFold][attrChildren], fid)
    if (foundFold) {
      return foundFold
    }
  }
}

export const limitPureNum = (numStr, obj, field, callback) => {
  if (numStr) {
    let newNum = numStr.replace(/\D/g, '') // 去除非数字字符
    if (obj && field) {
      obj[field] = newNum || newNum === 0 ? `${newNum}` : undefined
    }
  }
  callback && callback()
}

export const removeField = (obj, field, ignoreCloneFields = []) => {
  if (!obj) {
    return obj
  }
  const newObj = deepClone(obj, false, ignoreCloneFields)
  delete newObj[field]
  return newObj
}

export function mapToKeyLabel(obj) {
  if (!obj || !isObject(obj)) {
    return []
  }

  let keyLabel = []
  for (const [key, value] of Object.entries(obj)) {
    keyLabel = [...keyLabel, { value: key, label: value }]
  }
  return keyLabel
}

export function generateMonthRange(startTimestamp, endTimestamp) {
  const startDate = new Date(startTimestamp)
  const endDate = new Date(endTimestamp)

  const startYear = startDate.getFullYear()
  const startMonth = startDate.getMonth() // 0-11
  const endYear = endDate.getFullYear()
  const endMonth = endDate.getMonth() // 0-11

  // 计算总的月份数
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1

  // 生成月份数组
  return Array.from({ length: totalMonths }, (_, i) => {
    const date = new Date(startYear, startMonth + i)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // 月份补零
    return `${year}-${month}`
  })
}

export function getWeekNumber(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const pastDaysOfYear = (date - startOfYear) / 86400000 + startOfYear.getDay()
  return Math.ceil(pastDaysOfYear / 7)
}

export function generateWeekRange(startTimestamp, endTimestamp) {
  const startDate = new Date(startTimestamp)
  const endDate = new Date(endTimestamp)

  const totalWeeks = Math.ceil((endDate - startDate) / (7 * 24 * 60 * 60 * 1000))

  return Array.from({ length: totalWeeks }, (_, i) => {
    const currentDate = new Date(startDate)
    currentDate.setDate(currentDate.getDate() + i * 7)
    const year = currentDate.getFullYear()
    const weekNumber = getWeekNumber(currentDate)
    return `${year}第${String(weekNumber).padStart(2, '0')}周`
  })
}

export const formatOnlyMin = (endTime) => {
  let secondTime = parseInt(endTime) // 将传入的秒的值转化为Number
  let min = 0 // 初始化分
  if (secondTime > 60) {
    // 如果秒数大于60，将秒数转换成整数
    min = parseInt('' + secondTime / 60) // 获取分钟，除以60取整数，得到整数分钟
    secondTime = parseInt('' + (secondTime % 60)) // 获取秒数，秒数取佘，得到整数秒数
  }
  if (secondTime) {
    min = min + +(secondTime / 60).toFixed(1)
  }
  return `${min}min`
}

export const hour2Day = (hours, prefix = '') => {
  if (!hours && hours !== 0) {
    return hours
  }

  const days = Math.floor(hours / 24) // 计算天数
  const remainingHours = hours % 24 // 计算剩余小时数

  // 构建返回的字符串
  let result = ''
  if (days > 0) {
    result += `${days}天`
  }
  if (remainingHours > 0 || days === 0) {
    result += `${remainingHours}小时`
  }

  return `${prefix}${result}`
}

const doPadZero = (value, shouldBe = true) => {
  try {
    if (shouldBe) {
      return value.toString().padStart(2, '0')
    }
  } catch (err) {
    console.log(err)
  }
  return value
}

export const formatSeconds = (
  endTime,
  showH = true,
  hideZero = false,
  sign = { h: ':', min: ':', s: '' }
) => {
  let secondTime = parseInt(endTime) // 将传入的秒的值转化为Number
  let min = 0 // 初始化分
  let h = 0 // 初始化小时
  if (secondTime >= 60) {
    // 如果秒数大于60，将秒数转换成整数
    min = parseInt('' + secondTime / 60) // 获取分钟，除以60取整数，得到整数分钟
    secondTime = parseInt('' + (secondTime % 60)) // 获取秒数，秒数取佘，得到整数秒数
    if (min >= 60) {
      // 如果分钟大于60，将分钟转换成小时
      h = parseInt('' + min / 60) // 获取小时，获取分钟除以60，得到整数小时
      min = parseInt('' + (min % 60)) // 获取小时后取佘的分，获取分钟除以60取佘的分
    }
  }
  const shouldPadZero = sign.h === ':'
  if (showH) {
    const realH = h > 0 ? doPadZero(h, shouldPadZero) + sign.h : ''
    const realMin = !hideZero || min > 0 || h > 0 ? doPadZero(min, shouldPadZero) + sign.min : ''
    const realS =
      !hideZero || secondTime > 0 || min > 0 || h > 0
        ? doPadZero(secondTime, shouldPadZero) + sign.s
        : ''
    return realH + realMin + realS
  } else {
    return `${doPadZero(min, shouldPadZero)}:${doPadZero(secondTime, shouldPadZero)}`
  }
}

export const clearBaiduPlayerStorage = () => {
  window.setTimeout(() => {
    for (const key of Object.keys(window.localStorage)) {
      if (key.includes('baiducyberplayer.filePostion')) {
        window.localStorage.removeItem(key)
      }
    }
  }, 300)
}

export const generatePlayerConfig = (
  videoUrl,
  controls = true,
  title = '',
  pic = '',
  logo = ''
) => {
  return {
    width: '100%', // 宽度，也可以支持百分比(不过父元素宽度要有)
    height: '100%', // 高度，也可以支持百分比
    title, // 标题
    file: videoUrl, // 播放地址
    image: pic, // 预览图
    autostart: false, // 是否自动播放
    repeat: true, // 是否重复播放
    stretching: 'uniform', // 拉伸设置
    volume: 100, // 音量
    controls, // controlbar 是否显示
    starttime: 0, // 视频开始播放时间点(单位s)，如果不设置，则可以从上次播放时间点续播
    logo: {
      // logo 设置
      linktarget: '_blank',
      margin: 8,
      hide: false,
      position: 'top-right', // 位置
      file: logo // 图片地址
    },
    ak: AK_BAIDU_PLAYER // 公有云平台注册即可获得 accessKey  密钥可自行申请
  }
}

export const blobDownload = (blobRes) => {
  // 获取文件名
  const fileName = blobRes.headers['content-disposition'].split('=')[1]
  const name = decodeURIComponent(fileName)
  const blob = new Blob([blobRes.data], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
  })
  // 创建一个a标签并设置href属性，之后模拟人为点击下载文件
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = name // 设置下载文件名
  document.body.appendChild(link)
  link.click() // 模拟点击
  // 释放资源并删除创建的a标签
  URL.revokeObjectURL(link.href)
  document.body.removeChild(link)
}

export const filenameByUrl = (url, index = 0) => {
  if (!url || !url.split) {
    return 'file_' + index
  }
  const strArr = url.split('/')
  return strArr[strArr.length - 1]
}

export const manualTargetBlur = (e) => {
  e && e.target && e.target.blur && e.target.blur()
}

export const doDownload = (url, payload = {}, method = 'GET') => {
  const body = document.getElementsByTagName('body')[0]
  const form = document.createElement('form') // <form method='GET' action='https://www.baidu.com'>
  form.method = method
  form.action = url
  const data = { ...payload, t: new Date().getTime() }
  for (const key in data) {
    const param = document.createElement('input') // <input name="startTime" value="2019-07-15" />
    param.type = 'hidden'
    param.name = key
    param.value = data[key]
    form.appendChild(param)
  }
  body.appendChild(form)
  form.submit() // 发请求
  body.removeChild(form)
  // </form> => submit() => 发送请求 url ?{startTime: '2019-07-15'} => 返回响应 文件流，浏览器自动下载
}

export const openFileUrl = (imgSrc, isDownload = false, callback, name = 'file') => {
  if (!isDownload) {
    return window.open(imgSrc, '_blank')
  }
  const image = new Image()
  // 解决跨域 Canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous')
  image.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, image.width, image.height)
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.download = name
      a.href = url
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    })
  }
  image.src = imgSrc
  image.onerror = (e) => callback(e)
}

export const initDoImages = (data) => {
  return !data
    ? []
    : isArray(data)
      ? isString(data[0])
        ? data.map((url) => {
            return { url }
          })
        : data.map((item) => {
            return { url: item.url }
          })
      : [{ url: data }]
}

export const doImageToString = (data) => {
  return !data ? '' : isArray(data) ? data.map((item) => item.url).join(',') : data
}

export const doImageToStringArray = (data) => {
  return !data ? [] : isArray(data) ? data.map((item) => item.url) : [data]
}

export const transferTF = (str) => {
  // 驼峰体转匈牙利
  if (!isString(str)) {
    return str
  }
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (/^[A-Z]$/.test(str[i])) {
      newStr = newStr + '_' + str[i].toLowerCase()
    } else {
      newStr = newStr + str[i]
    }
  }
  return newStr.startsWith('_') ? newStr.slice(1) : newStr
}

export const toTF = (str) => {
  // 匈牙利转驼峰体
  if (isString(str)) {
    let result = []
    str.split('_').forEach((e) => {
      e = `${e.charAt(0).toUpperCase()}${e.slice(1)}`
      result.push(e)
    })
    result = result.join('')
    return result
  } else {
    return str
  }
}

export const parseRange = (originArr) => {
  if (!originArr || !originArr.length) {
    return { start: '', end: '' }
  }
  const rangeStart = originArr[0] || originArr[0] === 0 ? +originArr[0] : ''
  if (originArr.length === 1) {
    return {
      start: rangeStart,
      end: '',
      rangeList: [rangeStart],
      existStart: true,
      isFirstErr: rangeStart === '' ? false : Number.isNaN(+originArr[0])
    }
  }
  const rangeEnd = originArr[1] || originArr[1] === 0 ? +originArr[1] : ''
  const existStart = getRealType(rangeStart) === 'number'
  const existEnd = getRealType(rangeEnd) === 'number'
  const invalidEnd = existStart && existEnd && rangeStart >= rangeEnd

  return {
    start: rangeStart,
    end: rangeEnd,
    rangeList:
      existStart && existEnd
        ? invalidEnd
          ? [rangeStart]
          : [rangeStart, rangeEnd]
        : existStart
          ? [rangeStart]
          : existEnd
            ? [rangeEnd]
            : undefined,
    existStart,
    existEnd,
    invalidEnd,
    isFirstErr: rangeStart === '' ? false : Number.isNaN(+originArr[0]),
    isSecErr: rangeEnd === '' ? false : Number.isNaN(+originArr[1])
  }
}

export const booleanPropComputed = (propValue) => {
  if (getRealType(propValue) === 'string') {
    return propValue !== 'false'
  }
  return !!propValue
}

export const parseUrlDate = (urlDate) => {
  if (!urlDate) {
    return ''
  }
  const isDateStr = getRealType(urlDate) === 'string'
  const hasEnSign = urlDate.includes(',')
  const hasCnSign = urlDate.includes('，')
  const regExp = /^\d{4}-\d{2}-\d{2}$/

  let startDate = ''
  let endDate = ''
  if (isDateStr && (hasEnSign || hasCnSign)) {
    const arrDate = hasEnSign ? urlDate.split(',') : urlDate.split('，')
    if (regExp.test(arrDate[0])) {
      startDate = arrDate[0]
    } else {
      try {
        startDate = dateFormat(arrDate[0])
      } catch (e) {}
    }
    if (regExp.test(arrDate[1])) {
      endDate = arrDate[1]
    } else {
      try {
        endDate = dateFormat(arrDate[1])
      } catch (e) {}
    }
    return startDate && endDate ? [startDate, endDate] : ''
  }
  try {
    const today = dateFormat(urlDate)
    return [today, today]
  } catch (e) {
    return ''
  }
}

export const safeParseJson = (originValue) => {
  if (!originValue) {
    return originValue
  }

  try {
    return JSON.parse(originValue)
  } catch (err) {
    console.log(err)
  }
  return originValue
}

export const getReasonHistory = (key) => {
  let ret = localStorage.getItem(key)
  ret = ret && JSON.parse(ret)
  let reasonHistory = []
  if (ret && getRealType(ret) === 'array') {
    reasonHistory = ret
  }
  return reasonHistory
}

export const saveToReasonHistory = (key, originValue) => {
  return new Promise((resolve) => {
    try {
      const value =
        getRealType(originValue) === 'string' ? originValue : JSON.stringify(originValue)
      let reasonHistory = getReasonHistory(key)
      const oldIndex = reasonHistory.findIndex((each) => each.content === value)
      if (oldIndex >= 0) {
        reasonHistory[oldIndex].date = Date.now()
      } else {
        reasonHistory.push({ content: value, date: Date.now() })
      }
      reasonHistory = sortArrayByDateField(reasonHistory, 'date')
      localStorage.setItem(key, JSON.stringify(reasonHistory.slice(0, 5)))
      resolve(reasonHistory)
    } catch (e) {
      resolve([])
    }
  })
}

export const merge = (target, ...arguList) => {
  for (let i = 0, j = arguList.length; i < j; i++) {
    let source = arguList[i] || {}
    for (let prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

export function isVNode(node) {
  return (
    node !== null &&
    typeof node === 'object' &&
    Object.prototype.hasOwnProperty.call(node, 'componentOptions')
  )
}

export const searchInfoById = (targetList, tid, field = 'id', childField = 'children') => {
  if (!targetList || !targetList.length) {
    return
  }
  for (const indexTarget of Object.keys(targetList)) {
    if (targetList[indexTarget][field] === tid) {
      return targetList[indexTarget]
    }
    const foundTarget = searchInfoById(targetList[indexTarget][childField], tid)
    if (foundTarget) {
      return foundTarget
    }
  }
}

const defaultMapHandler = (newMap, optionInfo) => {
  if (!optionInfo || !optionInfo.value) {
    return newMap
  }

  newMap[optionInfo.value] = optionInfo.label
  return newMap
}

export const getLabelMap = (options, callback = defaultMapHandler) => {
  if (!options || !options.length) {
    return {}
  }
  return options.reduce((newObj, eachOption) => callback(newObj, eachOption), {})
}
