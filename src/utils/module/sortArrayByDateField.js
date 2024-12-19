import getRealType from './getRealType'

const sortArrayByDateField = (objectArr, field = 'date', descending = true, useFormat = false) => {
  try {
    if (useFormat && objectArr && objectArr.length) {
      objectArr.forEach((eachInfo, eachIndex) => {
        if (/^\d{6}$/gi.test(`${objectArr[eachIndex][field]}`)) {
          objectArr[eachIndex][field] = `${objectArr[eachIndex][field]}`
            .split('')
            .reduce((newStr, eachChar, charIndex) => {
              const fixStr = charIndex === 3 ? '-' : ''
              return newStr + eachChar + fixStr
            }, '')
        }
        if (/^\d{8}$/gi.test(`${objectArr[eachIndex][field]}`)) {
          objectArr[eachIndex][field] = `${objectArr[eachIndex][field]}`
            .split('')
            .reduce((newStr, eachChar, charIndex) => {
              const fixStr = [3, 5].includes(charIndex) ? '-' : ''
              return newStr + eachChar + fixStr
            }, '')
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
  if (getRealType(objectArr) === 'array') {
    return objectArr.sort((a, b) => {
      const value1 = a[field]
      const value2 = b[field]
      if (value1.includes && value1.includes('-')) {
        if (descending) {
          // 降序
          return Date.parse(value2) - Date.parse(value1)
        } else {
          // 升序
          return Date.parse(value1) - Date.parse(value2)
        }
      } else {
        if (descending) {
          // 降序
          return value2 - value1
        } else {
          // 升序
          return value1 - value2
        }
      }
    })
  }
  return objectArr
}

export default sortArrayByDateField
