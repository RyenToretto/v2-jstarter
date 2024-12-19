/**
 * 首字母大写
 * @param {String} word 字符串
 * @returns 首字母大写后的字符串
 */
export function capitalize(word) {
  if (!word) {
    return
  }
  return word.replace(/\w/, ($1) => {
    return $1.toUpperCase()
  })
}
