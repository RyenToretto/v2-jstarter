import getRealType from './getRealType'
/**
 * 匹配指定对象中的其它属性值
 * @param {*} code 要转换的键
 * @param {Array} data map数据集 (为类Map结构的数组[code, name])
 * @returns {String}
 */
export default (code, data = []) => {
  const dataChildValid = data.every((v) => getRealType(v) === 'array')
  if (!dataChildValid) {
    return code
  }
  const matchedItem = data.find((v) => v[0] === code)
  if (matchedItem) {
    return matchedItem[1]
  } else {
    return code
  }
}
