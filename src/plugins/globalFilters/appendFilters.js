import * as globalFilters from '@/filters' // === 全局过滤器
import { getRealType } from '@/utils'

/**
 * @description 将全局过滤器动态追加
 * 命名规范：globalFilters.date -> utils.transferDate
 */
const appendFilters = (targetObj) => {
  const newObj = { ...targetObj }
  for (const eachFilterName in globalFilters) {
    if (eachFilterName === 'default' || getRealType(globalFilters[eachFilterName]) !== 'function') {
      continue
    }
    const prefix = 'transfer'
    const suffix = eachFilterName.replace(/(\w){1}/, ($1) => {
      return $1.toUpperCase()
    })
    const functionName = prefix + suffix
    if (newObj[functionName]) {
      console.warn(functionName, '已存在') // eslint-disable-line no-console
    }
    newObj[functionName] = globalFilters[eachFilterName]
  }
  return newObj
}

export default appendFilters
