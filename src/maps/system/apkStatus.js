export const APK_USELESS = -1
export const APK_NOT_PUBLISHED = 0
export const APK_PUBLISHED = 1

export default {
  APK_USELESS,
  APK_NOT_PUBLISHED,
  APK_PUBLISHED,
  statusClass(code) {
    let className = 'info'
    switch (code) {
      case APK_NOT_PUBLISHED:
        className = 'danger'
        break
      case APK_PUBLISHED:
        className = 'success'
        break
      default:
    }
    return className
  },
  status: {
    [APK_USELESS]: '已废弃',
    [APK_NOT_PUBLISHED]: '未发布',
    [APK_PUBLISHED]: '已发布'
  }
}
