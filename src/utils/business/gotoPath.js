/**
 * 跳转到指定页
 * @param {Object} payload 配置项
 *  options.path 路径
 *  option.query 表单查询
 *
 */
export default function gotoPath({ path, query }) {
  // TODO 待校验path权限
  const validPermission = true
  if (!validPermission) {
    return false
  }
  this.$router.push({
    path,
    query: query
  })
}
