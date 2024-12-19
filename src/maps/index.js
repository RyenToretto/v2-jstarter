import apps from './apps'
import blackList from './blackList'
import channelPlacement from './channelPlacement'
import country from './country'
import dataClear from './dataClear'
import doField from './doField'
import source from './source'
import event from './event'
import tracking from './tracking'
import summary from './summary'
import roi from './roi/index.js'
import language from './language'
import material from './material'
import mediation from './mediation'
import placement from './placement'
import setting from './setting'
import thirdParty from './thirdParty'
import log from './log'
import upload from './upload'
import system from './system'
import { dictionaryConfig } from '@/config'
import businessMonitor from './businessMonitor'
import unionGroup from './unionGroup'
import videoTask from './videoTask'
import withdrawalAudit from './withdrawalAudit'
import wz from './wz'
import ckOption from './ckOption'
// import mock files from modules
import conversion from '@/modules/report/conversion/_maps'
import userDeep from '@/modules/report/userDeep/_maps'
import biddingwin from '@/modules/biddingwin/_maps'
import overseaAd from '@/modules/business/overseaAd/_maps'
import ecpmDistribution from '@/modules/wz/ecpm/_maps'
import trafficReport from '@/modules/wz/trafficReport/_maps'
import company from '@/modules/company/_maps'
import finance from '@/modules/finance/_maps'
import generalConfig from '@/modules/system/generalConfig/_maps'
import xhSdk from '@/modules/setting/xhSdk/_maps'
import appSeries from '@/modules/setting/appSeries/_maps'
import costPulling from '@/modules/setting/costPulling/_maps'
import signConfig from '@/modules/setting/signConfig/_maps'
import firebaseConfig from '@/modules/setting/firebaseConfig/_maps'
import huaweiCostConfig from '@/modules/setting/huaweiCostConfig/_maps'
import smsConfig from '@/modules/setting/smsConfig/_maps'
import tenantConfig from '@/modules/setting/tenantConfig/_maps'
import costEnter from '@/modules/enter/cost/_maps'
import easy from '@/modules/easy/_maps'
import recharge from '@/modules/recharge/_maps'
import prepay from '@/modules/subscribe/prepay/_map'
import appFeaturePlan from '@/modules/subscribe/_maps/appFeaturePlan'
import merchant from '@/modules/subscribe/_maps/merchant'
import order from '@/modules/subscribe/_maps/order'
import payError from '@/modules/subscribe/_maps/payError'
import product from '@/modules/subscribe/_maps/product'
import rechargeStrategy from '@/modules/subscribe/_maps/rechargeStrategy'
import retentionEstimate from '@/modules/subscribe/_maps/retentionEstimate'
import subOverview from '@/modules/subscribe/_maps/subOverview'
import userSign from '@/modules/subscribe/_maps/userSign'
import unsign from '@/modules/subscribe/_maps/unsign'
import taskTemplate from '@/modules/task/template/_maps'
import taskApp from '@/modules/task/app/_maps'
import wzStrategy from '@/modules/wz/strategy/_maps'
import wzReport from '@/modules/wz/report/_maps'
import internalAdx from '@/modules/juwin/internalAdx/_maps'
import member from '@/modules/system/member/_maps'
import department from '@/modules/system/department/_maps'
import tools from '@/modules/tools/_maps'
import elb from '@/modules/tools/elb/_maps'
import toolsEvents from '@/modules/tools/events/_maps'
import dahanghai from '@/modules/dahanghai/_maps'
import drama from '@/modules/drama/_maps'
import other from '@/modules/other/_maps'

export default {
  ckOption,
  dahanghai,
  drama,
  platform: {
    android: '安卓',
    ios: 'iOS',
    quickapp: '快应用',
    mp_douyin: '抖音小程序',
    mp_weixin: '微信小程序',
    web: 'Web'
  },
  dictionaryConfig,
  role: {
    // generated from store
  },
  apps,
  blackList,
  channelPlacement,
  country,
  dataClear,
  doField,
  source,
  event,
  tracking,
  roi,
  system,
  summary,
  setting,
  thirdParty,
  mediation,
  placement,
  language,
  material,
  log,
  upload,
  unionGroup,
  videoTask,
  withdrawalAudit,
  businessMonitor,
  wz,
  // modules
  conversion,
  finance,
  userDeep,
  biddingwin,
  overseaAd,
  ecpmDistribution,
  trafficReport,
  company,
  generalConfig,
  xhSdk,
  appSeries,
  costPulling,
  signConfig,
  firebaseConfig,
  huaweiCostConfig,
  smsConfig,
  tenantConfig,
  costEnter,
  easy,
  recharge,
  prepay,
  appFeaturePlan,
  merchant,
  order,
  payError,
  product,
  rechargeStrategy,
  retentionEstimate,
  subOverview,
  userSign,
  unsign,
  taskTemplate,
  taskApp,
  wzStrategy,
  wzReport,
  internalAdx,
  member,
  department,
  tools,
  elb,
  toolsEvents,
  other
}
