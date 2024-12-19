/**
 * 获取地址栏参数
 * @params {String} param 参数名
 * @params {String|undefined} url 要匹配的url，不传则匹配当前页面url
 */
export default function getQueryString(param, url) {
  var t = `[?&]?${param}\\=([^&]+)`
  var reg = new RegExp(t)
  var str = url || location.search
  var result = str.match(reg)
  if (!result) {
    return ''
  }
  return result[1]
}
