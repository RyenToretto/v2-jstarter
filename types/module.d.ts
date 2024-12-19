/* 挂载变量到 vue后，声明类型 */
import type { ComponentPublicInstance, FunctionalComponent } from 'vue'
import MAPS from '../src/maps/index.js'
import * as filters from '../src/filters'
import * as utils from '../src/utils'
import qs from 'qs'
import type { AxiosInstance } from 'axios'

type BaseUtils = typeof utils

interface GlbUtils extends BaseUtils {
  transferCapitalize: typeof filters.capitalize;
  transferMapKeyToValue: typeof filters.mapKeyToValue;
  transferEmptyReplace: typeof filters.emptyReplace;
  transferDate: typeof filters.date;
  transferDateFormat: typeof filters.dateFormat;
  transferDateFrom: typeof filters.dateFrom;
  transferStrToDate: typeof filters.strToDate;
  transferLabelWeekStr: typeof filters.labelWeekStr;
  transferLabelJson: typeof filters.labelJson;
  transferLabelHour: typeof filters.labelHour;
  transferLabelPastHour: typeof filters.labelPastHour;
  transferThousandSeparator: typeof filters.thousandSeparator;
  transferMoney: typeof filters.money;
  transferFenMoney: typeof filters.fenMoney;
  transferInteger: typeof filters.integer;
  transferFloat: typeof filters.float;
  transferPercent: typeof filters.percent;
  transferHtmlToStr: typeof filters.htmlToStr;
  transferMsToHMS: typeof filters.msToHMS;
  transferUsToHMS: typeof filters.usToHMS;
  transferSecondsToHMS: typeof filters.secondsToHMS;
  transferFileSize: typeof filters.fileSize;
  transferUnitNumber: typeof filters.unitNumber;

  transferLabelLanguage: typeof filters.labelLanguage;
  transferLabelLangToType: typeof filters.labelLangToType;
  transferLabelLangType: typeof filters.labelLangType;
  transferAppIdToIcon: typeof filters.appIdToIcon;
  transferPkgToIcon: typeof filters.pkgToIcon;
  transferApkStatus: typeof filters.apkStatus;
  transferLabelDataClearStatus: typeof filters.labelDataClearStatus;
  transferLabelDataClearType: typeof filters.labelDataClearType;
  transferOverseaChannel: typeof filters.overseaChannel;
  transferOverseaCategory: typeof filters.overseaCategory;
  transferLabelRedisMapStatus: typeof filters.labelRedisMapStatus;
  transferLabelWithdrawalAuditStatus: typeof filters.labelWithdrawalAuditStatus;
  transferPlacemenIdToName: typeof filters.placemenIdToName;
  transferPlacementTypeIdToName: typeof filters.placementTypeIdToName;
  transferChannelPlacementTypeToName: typeof filters.channelPlacementTypeToName;
  transferDeliveryAccountStatus: typeof filters.deliveryAccountStatus;
  transferStatusSdkFile: typeof filters.statusSdkFile;
  transferTypeSdkFile: typeof filters.typeSdkFile;
  transferRole: typeof filters.role;
  transferAppIdToName: typeof filters.appIdToName;
  transferPkgToName: typeof filters.pkgToName;
  transferPkgToCompanyName: typeof filters.pkgToCompanyName;
  transferAppType: typeof filters.appType;
  transferAppCategory: typeof filters.appCategory;
  transferAttributionMode: typeof filters.attributionMode;
  transferAttributionCondition: typeof filters.attributionCondition;
  transferConversionEvent: typeof filters.conversionEvent;
  transferEventType: typeof filters.eventType;
  transferAdDim: typeof filters.adDim;
  transferAbTest: typeof filters.abTest;
  transferDeliveryMaterialType: typeof filters.deliveryMaterialType;
  transferDeliveryMedia: typeof filters.deliveryMedia;
  transferDeliveryIndicator: typeof filters.deliveryIndicator;
  transferIndicatorEnumExternalAction: typeof filters.indicatorEnumExternalAction;
  transferIndicatorEnumDeepExternalAction: typeof filters.indicatorEnumDeepExternalAction;
  transferSource: typeof filters.source;
  transferMediationSource: typeof filters.mediationSource;
  transferRevenueSource: typeof filters.revenueSource;
  transferRevenueSubSource: typeof filters.revenueSubSource;
  transferMaterialType: typeof filters.materialType;
  transferMaterialPlatform: typeof filters.materialPlatform;
  transferMaterialCategory: typeof filters.materialCategory;
  transferRoiIndicator: typeof filters.roiIndicator;
  transferSummaryIndicator: typeof filters.summaryIndicator;
  transferSspSlotType: typeof filters.sspSlotType;
  transferSlotTypeName: typeof filters.slotTypeName;
  transferPullMode: typeof filters.pullMode;
  transferLogModule: typeof filters.logModule;
  transferLogAction: typeof filters.logAction;
  transferLogStatus: typeof filters.logStatus;
  transferCompanyType: typeof filters.companyType;
  transferBusinessMonitorStatus: typeof filters.businessMonitorStatus;
  transferLabelPlacementPullMode: typeof filters.labelPlacementPullMode;
  transferLabelPlacementStatus: typeof filters.labelPlacementStatus;
  transferLabelPlacementOrientation: typeof filters.labelPlacementOrientation;
  transferCountry: typeof filters.country;
}

declare module 'vue/types/vue' {
  interface Vue {
    $MAPS: typeof MAPS
    $utils: GlbUtils
    $qs: typeof qs
    $axios: AxiosInstance
    $PERMISSION: string[]
    $HAS_PERMISSION: (permission: string | RegExp | string[]) => boolean
    $doPreview: (urlList: string[], viewIndex?: number | string) => undefined
    $doCopy: (value: string, event?: any) => undefined
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}

declare module 'element-ui/lib/mixins/emitter'
