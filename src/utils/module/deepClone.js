import getRealType from './getRealType'
// 深拷贝
const deepClone = (data, noEmptyProperty = false, ignore = []) => {
  let _type = getRealType(data)
  let copyOfObj

  if (_type === 'array') {
    copyOfObj = []
  } else if (_type === 'object') {
    copyOfObj = {}
  } else {
    return data
  }

  for (const [key, value] of Object.entries(data)) {
    if (noEmptyProperty && (value === '' || value === null || value === undefined)) {
      continue
    }
    if (ignore && ignore.includes && ignore.includes(key)) {
      delete copyOfObj[key]
      continue
    }
    copyOfObj[key] = deepClone(value)
  }

  return copyOfObj
}

export default deepClone
