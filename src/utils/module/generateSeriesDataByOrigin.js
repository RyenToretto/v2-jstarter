const generateSeriesDataByOrigin = (seriesData) => {
  if (!seriesData) {
    return []
  }
  let newArr = []
  for (const value of Object.values(seriesData)) {
    if (!value) {
      continue
    }
    let newItem = []
    for (const item of Object.values(value)) {
      if (Number.isNaN(+item)) {
        newItem = [item, ...newItem]
      } else {
        newItem = [...newItem, item]
      }
    }
    newArr = [...newArr, newItem]
  }
  return newArr
}

export default generateSeriesDataByOrigin
