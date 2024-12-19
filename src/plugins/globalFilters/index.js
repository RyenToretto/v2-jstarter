import {
  capitalize,
  mapKeyToValue,
  emptyReplace,
  date,
  dateFormat,
  dateFrom,
  strToDate,
  labelWeekStr,
  labelJson,
  labelHour,
  labelPastHour,
  thousandSeparator,
  money,
  integer,
  float,
  percent,
  fenMoney,
  htmlToStr,
  msToHMS,
  usToHMS,
  secondsToHMS,
  fileSize,
  unitNumber,
  labelLanguage,
  labelLangToType,
  labelLangType,
  appIdToIcon,
  pkgToIcon,
  apkStatus,
  channelPlacementTypeToName,
  placemenIdToName,
  placementTypeIdToName,
  labelRedisMapStatus,
  labelWithdrawalAuditStatus,
  labelDataClearStatus,
  labelDataClearType,
  abTest,
  adDim,
  appCategory,
  appIdToName,
  appType,
  attributionCondition,
  attributionMode,
  businessMonitorStatus,
  companyType,
  conversionEvent,
  country,
  deliveryAccountStatus,
  deliveryIndicator,
  deliveryMaterialType,
  deliveryMedia,
  eventType,
  indicatorEnumDeepExternalAction,
  indicatorEnumExternalAction,
  labelPlacementOrientation,
  labelPlacementPullMode,
  labelPlacementStatus,
  logAction,
  logModule,
  logStatus,
  materialCategory,
  materialPlatform,
  materialType,
  mediationSource,
  pkgToCompanyName,
  pkgToName,
  pullMode,
  revenueSource,
  revenueSubSource,
  roiIndicator,
  role,
  slotTypeName,
  source,
  sspSlotType,
  statusSdkFile,
  summaryIndicator,
  typeSdkFile,
  overseaChannel,
  overseaCategory
} from '@/filters'

export default {
  install(Vue) {
    Vue.filter('capitalize', capitalize)
    Vue.filter('mapKeyToValue', mapKeyToValue)
    Vue.filter('emptyReplace', emptyReplace)
    Vue.filter('date', date)
    Vue.filter('dateFormat', dateFormat)
    Vue.filter('dateFrom', dateFrom)
    Vue.filter('strToDate', strToDate)
    Vue.filter('labelWeekStr', labelWeekStr)
    Vue.filter('labelJson', labelJson)
    Vue.filter('labelHour', labelHour)
    Vue.filter('labelPastHour', labelPastHour)
    Vue.filter('thousandSeparator', thousandSeparator)
    Vue.filter('money', money)
    Vue.filter('fenMoney', fenMoney)
    Vue.filter('integer', integer)
    Vue.filter('float', float)
    Vue.filter('percent', percent)
    Vue.filter('htmlToStr', htmlToStr)
    Vue.filter('msToHMS', msToHMS)
    Vue.filter('usToHMS', usToHMS)
    Vue.filter('secondsToHMS', secondsToHMS)
    Vue.filter('fileSize', fileSize)
    Vue.filter('unitNumber', unitNumber)

    Vue.filter('labelLanguage', labelLanguage)
    Vue.filter('labelLangToType', labelLangToType)
    Vue.filter('labelLangType', labelLangType)
    Vue.filter('appIdToIcon', appIdToIcon)
    Vue.filter('pkgToIcon', pkgToIcon)
    Vue.filter('apkStatus', apkStatus)
    Vue.filter('labelDataClearStatus', labelDataClearStatus)
    Vue.filter('labelDataClearType', labelDataClearType)
    Vue.filter('overseaChannel', overseaChannel)
    Vue.filter('overseaCategory', overseaCategory)
    Vue.filter('labelRedisMapStatus', labelRedisMapStatus)
    Vue.filter('labelWithdrawalAuditStatus', labelWithdrawalAuditStatus)
    Vue.filter('placemenIdToName', placemenIdToName)
    Vue.filter('placementTypeIdToName', placementTypeIdToName)
    Vue.filter('channelPlacementTypeToName', channelPlacementTypeToName)
    Vue.filter('deliveryAccountStatus', deliveryAccountStatus)
    Vue.filter('statusSdkFile', statusSdkFile)
    Vue.filter('typeSdkFile', typeSdkFile)
    Vue.filter('role', role)
    Vue.filter('appIdToName', appIdToName)
    Vue.filter('pkgToName', pkgToName)
    Vue.filter('pkgToCompanyName', pkgToCompanyName)
    Vue.filter('appType', appType)
    Vue.filter('appCategory', appCategory)
    Vue.filter('attributionMode', attributionMode)
    Vue.filter('attributionCondition', attributionCondition)
    Vue.filter('conversionEvent', conversionEvent)
    Vue.filter('eventType', eventType)
    Vue.filter('adDim', adDim)
    Vue.filter('abTest', abTest)
    Vue.filter('deliveryMaterialType', deliveryMaterialType)
    Vue.filter('deliveryMedia', deliveryMedia)
    Vue.filter('deliveryIndicator', deliveryIndicator)
    Vue.filter('indicatorEnumExternalAction', indicatorEnumExternalAction)
    Vue.filter('indicatorEnumDeepExternalAction', indicatorEnumDeepExternalAction)
    Vue.filter('source', source)
    Vue.filter('mediationSource', mediationSource)
    Vue.filter('revenueSource', revenueSource)
    Vue.filter('revenueSubSource', revenueSubSource)
    Vue.filter('materialType', materialType)
    Vue.filter('materialPlatform', materialPlatform)
    Vue.filter('materialCategory', materialCategory)
    Vue.filter('roiIndicator', roiIndicator)
    Vue.filter('summaryIndicator', summaryIndicator)
    Vue.filter('sspSlotType', sspSlotType)
    Vue.filter('slotTypeName', slotTypeName)
    Vue.filter('pullMode', pullMode)
    Vue.filter('logModule', logModule)
    Vue.filter('logAction', logAction)
    Vue.filter('logStatus', logStatus)
    Vue.filter('companyType', companyType)
    Vue.filter('businessMonitorStatus', businessMonitorStatus)
    Vue.filter('labelPlacementPullMode', labelPlacementPullMode)
    Vue.filter('labelPlacementStatus', labelPlacementStatus)
    Vue.filter('labelPlacementOrientation', labelPlacementOrientation)
    Vue.filter('country', country)
  }
}
