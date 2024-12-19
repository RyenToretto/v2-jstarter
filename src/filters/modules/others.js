import maps from '@/maps'
import { mapKeyToValue } from '@/filters'
import { coerceNumberValue, matchObjProperty } from '@/utils'
import { SDK_UNKNOWN } from '@/modules/setting/xhSdk/_maps/manage'
import { pkgToCompany } from '@/modules/company/_filter'

export const labelLanguage = (code) => {
  return maps.language.labelMap[code] || code
}

export const labelLangToType = (code) => {
  return maps.language.phoTypeMap[code] || code
}

export const labelLangType = (code) => {
  return maps.language.langType.labelMap[code] || code
}

export const apkStatus = (code) => mapKeyToValue(code, maps.system.apkStatus.status)
export const labelDataClearStatus = (code) => mapKeyToValue(code, maps.dataClear.status.labelMap)
export const labelDataClearType = (code) => mapKeyToValue(code, maps.dataClear.type.labelMap)
export const overseaChannel = (code) => {
  const ret = mapKeyToValue(code, maps.material.oversea.channel)
  return ret && ret.label ? ret.label : code
}
export const overseaCategory = (code) => {
  const ret = mapKeyToValue(code, maps.material.oversea.category)
  return ret && ret.zh ? ret.zh : code
}
export const labelRedisMapStatus = (code) =>
  mapKeyToValue(code, maps.setting.redisMap.status.labelMap)
export const labelWithdrawalAuditStatus = (code) =>
  mapKeyToValue(code, maps.withdrawalAudit.status.labelMap)
export const placemenIdToName = (code) => mapKeyToValue(code, maps.placement.idToName)
export const placementTypeIdToName = (code) => mapKeyToValue(code, maps.placement.type.idToName)
export const channelPlacementTypeToName = (code) =>
  mapKeyToValue(code, maps.channelPlacement.type.typeToName)

export function deliveryAccountStatus(code, source = '') {
  const sourceEnum = maps.thirdParty[source] || {}
  const Enum = sourceEnum.accountStatus || {}
  return mapKeyToValue(code, Enum)
}
// xhSdk.manager
export const statusSdkFile = (code) =>
  mapKeyToValue(coerceNumberValue(code, SDK_UNKNOWN), maps.xhSdk.manager.statusMapSdkFile)
export const typeSdkFile = (code) => mapKeyToValue(code, maps.xhSdk.manager.typeMapSdkFile)
export const role = (code) => mapKeyToValue(code, maps.role)
export const pkgToName = (code) => mapKeyToValue(code, maps.apps.pkgToName)
export const pkgToCompanyName = pkgToCompany
export const pkgToIcon = (code) => mapKeyToValue(code, maps.apps.pkgToIcon)
export const appIdToName = (code) => mapKeyToValue(code, maps.apps.idToName)
export const appIdToIcon = (code) => mapKeyToValue(code, maps.apps.idToIcon)
export const appType = (code) => mapKeyToValue(code, maps.apps.appType)
export const appCategory = (code) => mapKeyToValue(code, maps.apps.category)
export const attributionMode = (code) => mapKeyToValue(code, maps.apps.attributionMode)
export const attributionCondition = (code) => mapKeyToValue(code, maps.apps.attributionCondition)
export const conversionEvent = (code, source) => {
  const data = maps.apps.conversionEvent[source] || []
  const eventItem = data.find((v) => v.code === code) || {}
  return eventItem.name || code
}

export const eventType = (code) => mapKeyToValue(code, maps.event.type)
export const adDim = (code) => mapKeyToValue(code, maps.tracking.dim)
export const abTest = (code) => mapKeyToValue(code, Object.fromEntries(maps.apps.abTestEntries))
export const deliveryMaterialType = (code) => mapKeyToValue(code, maps.tracking.material.type)
export const deliveryMedia = (code, source) => {
  const data = source ? maps.tracking.inventory[source] : []
  if (source === 'ks') {
    // 快手渠道给的数据是映射后的中文，直接展示即可无需过滤
    return code
  }
  return matchObjProperty(code, 'code', 'name', data)
}
export const deliveryIndicator = (code) => mapKeyToValue(code, maps.tracking.indicator)
export const indicatorEnumExternalAction = (code, source = 'csj') =>
  mapKeyToValue(code, maps.tracking.indicatorEnum.externalAction[source] || {})
export const indicatorEnumDeepExternalAction = (code, source = 'csj') =>
  mapKeyToValue(code, maps.tracking.indicatorEnum.deepExternalAction[source] || {})

export const source = (code) => mapKeyToValue(code, maps.source.list)
export const mediationSource = (code) => mapKeyToValue(code, maps.source.mediationSource)
export const revenueSource = (code) =>
  matchObjProperty(code, 'code', 'name', maps.source.revenueSource)
export const revenueSubSource = (code) => mapKeyToValue(code, maps.summary.subSource)

export const materialType = (code) => mapKeyToValue(code, maps.material.type)
export const materialPlatform = (code) => mapKeyToValue(code, maps.material.platform)
export const materialCategory = (code) => mapKeyToValue(code, maps.material.category)
export const roiIndicator = (code) => matchObjProperty(code, 'prop', 'label', maps.roi.indicator)
export const summaryIndicator = (code) =>
  matchObjProperty(code, 'prop', 'label', maps.summary.indicator)
export const sspSlotType = (code) => mapKeyToValue(code, maps.mediation.sspSlotType)
export const slotTypeName = (type) =>
  matchObjProperty(type, 'type', 'name', maps.mediation.slotTypeName)
export const pullMode = (code) => mapKeyToValue(code, maps.mediation.pullMode)
export const logModule = (code) => mapKeyToValue(code, maps.log.module)
export const logAction = (code) => mapKeyToValue(code, maps.log.action)
export const logStatus = (code) => mapKeyToValue(code, maps.log.status)
export const companyType = (code) => mapKeyToValue(code, maps.company.type)
export const businessMonitorStatus = (code) => mapKeyToValue(code, maps.businessMonitor.status)
export const labelPlacementPullMode = (code) =>
  mapKeyToValue(code, maps.placement.pullMode.labelMap)
export const labelPlacementStatus = (code) => mapKeyToValue(code, maps.placement.status.labelMap)
export const labelPlacementOrientation = (code) =>
  mapKeyToValue(code, maps.placement.orientation.labelMap)

export const country = (code, codeProp = 'code') =>
  matchObjProperty(code, codeProp, 'name', maps.country.allCountries)
