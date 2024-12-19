function buildFromEntries(entries) {
  let o = {}
  if (Object.prototype.toString.call(entries) === '[object Array]') {
    o = Object.fromEntries(entries)
    Object.defineProperty(o, '__entries', {
      value: entries
    })
  }
  return o
}
export const statusEntries = [
  [1, '已完成'],
  [2, '待处理'],
  [3, '处理中'],
  [4, '处理失败']
]
export const taskTypeEntries = [
  ['single', '单人视频'],
  ['multiple', '多人视频']
]
export default {
  status: buildFromEntries(statusEntries),
  taskType: Object.fromEntries(taskTypeEntries)
}
