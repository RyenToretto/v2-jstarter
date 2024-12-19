import getRealType from './getRealType'
/**
 * 匹配指定对象中的其它属性值
 * @param {*} code 要转换的原始值
 * @param {String} sourceKey 原始值字段名
 * @param {Stirng} targetKey 返回值的字段名
 * @param {Array} data 数据集 (子原始必须为对象)
 * @returns {String}
 */
export default (code, sourceKey = '', targetKey = '', data = []) => {
  const dataChildValid = data.every((v) => getRealType(v) === 'object')
  if (!dataChildValid) {
    return code
  }
  const matchedItem = data.find((v) => v[sourceKey] === code)
  if (matchedItem) {
    return matchedItem[targetKey]
  } else {
    return code
  }
}
