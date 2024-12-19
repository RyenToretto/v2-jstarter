import { getWeekNumber } from '@/utils'

export const getRandomOptions = (options, field) => {
  if (!options || !options.length) {
    return ''
  }

  const str = options.reduce((newStr, eachOption) => {
    if (!eachOption || (field && !eachOption[field])) {
      return newStr
    }

    const newAppend = !field ? eachOption : `"${eachOption[field]}"`
    if (!newStr) {
      return newAppend
    }
    return newStr + `,${newAppend}`
  }, '')
  return `@pick(${str})`
}

export const mockValue = (e, empty = false) => {
  if (empty) {
    return undefined
  }
  return e
}

const picList = [
  'http://static.coollib.ai/file/RUgy7Tc5qVCPvld3_838c4175-acad-4950-b981-1dfdfda5c774.png.jpg',
  'http://static.coollib.ai/file/RUgy7Tc5qVCPvld3_3fade30d-8322-46ec-8e8e-f057f1608f63.png.jpg',
  'http://static.coollib.ai/file/RUgy7Tc5qVCPvld3_162a41a6-e6af-4c66-b9e1-beecec57cd99.png.jpg',
  'http://static.coollib.ai/file/RUgy7Tc5qVCPvld3_10279dfe-8ab8-4dbe-a5a2-233a702511c0.png.jpg',
  'http://static.coollib.ai/file/RUgy7Tc5qVCPvld3_271d4a30-0011-4d16-81f9-8a16f66590a5.png.jpg',
  'http://static.coollib.ai/file/aaa.txt',
  'http://static.coollib.ai/file/bbb.txt',
  'http://static.coollib.ai/file/ccc.txt',
  'http://static.coollib.ai/file/aaa.mp4',
  'http://static.coollib.ai/file/bbb.mp4',
  'http://static.coollib.ai/file/ccc.mp4'
]

export const randomPicLink = getRandomOptions(picList)

export const getRecentDay = (n = 0) => {
  return window.dayjs(Date.now() - n * 24 * 60 * 60 * 1000).format('YYYY-MM-DD')
}

export function getWeekStr(offset) {
  const now = new Date()
  const targetDate = new Date(now)
  targetDate.setDate(now.getDate() + offset * 7)

  const year = targetDate.getFullYear()
  const weekNumber = getWeekNumber(targetDate)

  const yearStr = String(year) // 获取年份的最后两位
  const weekStr = String(weekNumber).padStart(2, '0') // 周数用两位数表示

  return `${yearStr}${weekStr}`
}

export const defaultSuccess = {
  code: '0000',
  message: 'success',
  result: {}
}
export const defaultFail = {
  code: '2002',
  message: 'mock错误',
  result: {}
}
export const sessionExpired = {
  code: '3001',
  message: 'session过期',
  result: null
}
export const userInExist = {
  code: '3005',
  message: '用户未找到',
  result: null
}
export const canNotDelete = {
  code: '3004',
  message: null,
  result: {
    hasWithdrawProduct: true,
    hasPaymentMerchant: true,
    hasConfig: true
  }
}
export const notPermission = {
  code: '4001',
  message: '权限不足',
  result: null
}
