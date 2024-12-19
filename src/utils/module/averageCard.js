const averageCard = (ele, cardSize, extraGap = 18) => {
  if (!ele) {
    return cardSize
  }

  try {
    const eleInfo = ele.getBoundingClientRect()
    const fullSize = eleInfo.width - extraGap

    const count = +(fullSize / cardSize).toFixed(0)
    const averageSize = +((fullSize - count * cardSize) / count).toFixed(0)
    return cardSize + averageSize
  } catch (err) {
    console.log(err)
    return cardSize
  }
}
export default averageCard
