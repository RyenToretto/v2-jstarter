import store from '@/store'
/**
 *
 * @param {String} pkg 包名
 * @param {String} key 属性名
 * @returns 应用对象或属性值
 */
export default function (pkg, key) {
  const appInfo = store.state.apps.allApps.find((v) => v.pkg === pkg)
  if (key) {
    return appInfo ? appInfo[key] : null
  }
  return appInfo || null
}
