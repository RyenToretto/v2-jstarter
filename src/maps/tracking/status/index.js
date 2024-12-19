/**
 * 广告组、计划、创意 的状态枚举
 */
import csj from './csj'
import gdt from './gdt'
import baidu from './baidu'
import ks from './ks'
import facebook from './facebook'
export const statusEnu = {
  campaign: Object.assign(
    {},
    csj.campaign,
    gdt.campaign,
    baidu.campaign,
    ks.campaign,
    facebook.campaign
  ),
  ad: Object.assign({}, csj.ad, gdt.ad, baidu.ad, ks.ad, facebook.ad),
  creative: Object.assign(
    {},
    csj.creative,
    gdt.creative,
    baidu.creative,
    ks.creative,
    facebook.creative
  )
}
function statusFlatten(groupName) {
  const statusObj = statusEnu[groupName] || {}
  const status = {}
  for (let code in statusObj) {
    status[code] = statusObj.name
  }
  return status
}
export default {
  campaign: statusFlatten('campaign'),
  ad: statusFlatten('ad'),
  creative: statusFlatten('creative')
}
