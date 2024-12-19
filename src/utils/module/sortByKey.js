/**
 * 数组内对象按属性值排序
 * @param {Array} arr 要排序的对象
 * @param {String} key 对象属性
 * @param {'asc' | 'desc'} sortMethod 排序方法
 */
function sortByKey(arr, key, sortMethod = 'asc') {
  arr.sort((a, b) => {
    let result = 0
    if (sortMethod === 'desc') {
      result = a[key] <= b[key] ? 1 : -1
    } else {
      result = a[key] <= b[key] ? -1 : 1
    }
    return result
  })
}
export default sortByKey
