/**
 * 对象分组按某个属性值分组
 * @param {Array} array 需要分组的对象数组
 * @param {String} prop 按什么字段分组
 * @returns 返回分组后的 数组 [[groupName1, [group1]], [groupName*, [group*]]]
 * 样例：const students = [{name: 'Lily', class: '3-1'}, {name: 'Tom', class: '3-2'}, {name: 'Jerry', class: '3-1'}]
 * 调用：groupBy(students, 'class')
 * 输出：
//  [
//     [
//         "3-1",
//         [
//             {
//                 "name": "Lily",
//                 "class": "3-1"
//             },
//             {
//                 "name": "Jerry",
//                 "class": "3-1"
//             }
//         ]
//     ],
//     [
//         "3-2",
//         [
//             {
//                 "name": "Tom",
//                 "class": "3-2"
//             }
//         ]
//     ]
// ]
 */
export function groupBy(array, prop) {
  if (!prop) {
    return array
  }
  const result = array.reduce((map, arrItem) => {
    const groupName = arrItem[prop]
    if (!map.has(groupName)) {
      map.set(groupName, [])
    }
    map.get(groupName).push(arrItem)
    return map
  }, new Map())
  return Array.from(result)
}
export default groupBy
