/**
 * 「日期」排完之后，同一日期之内「收入」倒排
 * */
const sortDayMoney = (originArr, attrDay, attrMoney) => {
  if (!originArr || !originArr.length) {
    return originArr
  }
  let currentDay = originArr[0][attrDay]
  let tIndex = 0

  // 按照日期分组
  const originSort = originArr.reduce((newArr, eachItem) => {
    if (currentDay !== eachItem[attrDay]) {
      currentDay = eachItem[attrDay]
      tIndex = tIndex + 1
    }

    if (!newArr[tIndex]) {
      newArr[tIndex] = []
    }
    newArr[tIndex].push(eachItem)
    return newArr
  }, [])

  // 按金钱倒排
  return originSort.reduce((newList, eachGroup) => {
    return [...newList, ...eachGroup.sort((a, b) => b[attrMoney] - a[attrMoney])]
  }, [])
}
export default sortDayMoney
