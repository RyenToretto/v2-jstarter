import MockJS from 'mockjs'
import { defaultSuccess } from './utils'

import account from './account'
import apps from './apps'
import apk from './apk'
import appId from './appId'
import events from './events'
import face from './face'
import placement from './placement'
import placementType from './placementType'
import channelPlacementType from './channelPlacementType'
import channelApp from './channelApp'
import channelPlacement from './channelPlacement'
import channelPlacementConfig from './channelPlacementConfig'
import channelPlacementMediation from './channelPlacementMediation'
import source from './source'
import tracking from './tracking'
import delivery from './delivery'
import summary from './summary'
import mockDataClearList from './mockDataClearList'
import roi from './roi'
import material from './material'
import materialOverview from './materialOverview'
import rebates from './rebates'
import log from './log'
import unionGroup from './unionGroup'
import dataDictionary from './dataDictionary'
import dataDictionaryItem from './dataDictionaryItem'
import { mockDictionaryItemListMap } from '@/config'
import businessMonitor from './businessMonitor'
import promotion from './promotion'
import staticVersion from './staticVersion'
import videoTask from './videoTask'
import blackList from '@/mock/blackList'
import withdrawalAudit from '@/mock/withdrawalAudit'
import appCountry from '@/mock/appCountry'
// 模块
import setting from '@/mock/setting'
import biddingwinMock from '@/modules/biddingwin/_mock'
import easy from '@/modules/easy/_mock'
import juwin from '@/modules/juwin/_mock'
import recharge from '@/modules/recharge/_mock'
import subscribe from '@/modules/subscribe/_mock'
import wz from '@/modules/wz/_mock'
import company from '@/modules/company/_mock'
import finance from '@/modules/finance/_mock'
import generalConfig from '@/modules/system/generalConfig/_mock'
import costEnter from '@/modules/enter/cost/_mock'
import taskTemplate from '@/modules/task/template/_mock'
import taskApp from '@/modules/task/app/_mock'
import organization from '@/modules/system/organization/_mock'
import systemConfig from '@/modules/system/config/_mock'
import department from '@/modules/system/department/_mock'
import dramaAuthConfig from '@/modules/system/dramaAuthConfig/_mock'
import member from '@/modules/system/member/_mock'
import report from '@/modules/report/_mock'
import mediation from '@/modules/mediation/_mock'
import offline from '@/modules/offline/_mock'
import { mockClickInfo, mockSendHistory } from '@/mock/turnTest'
import tools from '@/modules/tools/_mock'
import dahanghai from '@/modules/dahanghai/_mock'
import drama from '@/modules/drama/_mock'
import other from '@/modules/other/_mock'
import business from '@/modules/business/_mock'
import mockSTSToken from '@/mock/mockSTSToken'
import mockAllEventsOption from '@/mock/mockAllEventsOption'

const Mock = MockJS
Mock.setup({
  timeout: '100-300'
})

// const defaultFail = {
//   code: '2002',
//   message: 'mock failed',
//   result: {}
// }
// const sessionExp = {
//   code: '3001',
//   message: 'session expired!',
//   result: {}
// }
// const notPermission = {
//   code: '3005',
//   message: 'notPermission!',
//   result: {}
// }
// const defaultUpload = {
//   code: '0000',
//   result: {
//     url: "http://cdn.xdplt.com/ad/ODN4ODMuanBnMTU5MDcyOTk5NTcxNA==.jpg"
//   }
// }
const modules = [
  business,
  report,
  mediation,
  setting,
  biddingwinMock,
  easy,
  juwin,
  recharge,
  subscribe,
  wz,
  company,
  finance,
  generalConfig,
  costEnter,
  taskTemplate,
  taskApp,
  organization,
  department,
  dramaAuthConfig,
  member,
  systemConfig,
  offline,
  tools,
  dahanghai,
  drama,
  other
]

function extendingModule(module) {
  module.forEach((v) => {
    // console.log(...v)
    Mock.mock(...v)
  })
}

// mock配置
if (location.pathname === '/mock/') {
  // 导入模块
  modules.forEach(extendingModule)

  Mock.mock(/\/events\/all\/values/, 'get', mockAllEventsOption)
  Mock.mock(/\/data\/version\.json/, 'get', staticVersion)

  Mock.mock(/\/sample/, 'get', defaultSuccess)
  Mock.mock(/\/country\/revenue\/code/, 'get', appCountry.all)
  Mock.mock(/\/app\/country/, 'get', appCountry.list)
  // 用户信息
  Mock.mock(/\/account\/info/, 'get', account.info)
  // Mock.mock(/\/account\/info/, 'get', { code: '3005' })
  Mock.mock(/\/account\/info/, 'put', defaultSuccess)
  Mock.mock(/\/user\/changePwd/, 'put', defaultSuccess)

  // 应用管理
  Mock.mock(/^\/api\/v\d+\/app\/name/, 'get', apps.allApps)
  Mock.mock(/^\/api\/v\d+\/app\/appvn/, 'get', apps.appVersion)
  Mock.mock(/^\/api\/v\d+\/app\/source\?/, 'get', apps.attributionConfig)
  Mock.mock(/^\/api\/v\d+\/app\?/, 'get', apps.list)
  Mock.mock(/^\/api\/v\d+\/app/, 'post', defaultSuccess)
  Mock.mock(/^\/api\/v\d+\/app/, 'put', defaultSuccess)
  Mock.mock(/^\/api\/v\d+\/app/, 'delete', defaultSuccess)

  // 版本管理
  Mock.mock(/^\/api\/v\d+\/apk\/version\/config\?/, 'get', apk.versionConfig)
  Mock.mock(/^\/api\/v\d+\/apk\/publish\/message\?/, 'get', defaultSuccess)
  Mock.mock(/^\/api\/v\d+\/apk\/versions\?/, 'get', apk.versionList)
  Mock.mock(/^\/api\/v\d+\/apk\/list/, 'get', apk.list)
  Mock.mock(/^\/api\/v\d+\/apk\/upload/, 'post', apk.upload)
  Mock.mock(/^\/api\/v\d+\/apk/, 'post', defaultSuccess)
  Mock.mock(/^\/api\/v\d+\/pay\/merchant\/upload/, 'post', {
    code: '0000',
    result: '@string("lower",32)'
  })
  Mock.mock(/^\/api\/v\d+\/apk\/status\/\d+/, 'put', defaultSuccess)
  Mock.mock(/^\/api\/v\d+\/apk\/upgrade\/\d+/, 'put', defaultSuccess)
  Mock.mock(/^\/api\/v\d+\/apk\/\d+/, 'put', defaultSuccess)
  Mock.mock(/^\/api\/v\d+\/apk\/\d+/, 'delete', defaultSuccess)

  // appId
  Mock.mock(/\/appid\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/appid\/\d+/, 'delete', defaultSuccess)
  Mock.mock(/\/appid\/name/, 'get', appId.allAppIds)
  Mock.mock(/\/appid\?/, 'get', appId.list)
  Mock.mock(/\/appid/, 'post', defaultSuccess)

  // 获取 STS 临时 Token
  Mock.mock(/^\/api\/v.+\/sts/, 'get', mockSTSToken)
  // 上传 file
  Mock.mock(/^\/api\/v\d+\/upload/, 'post', {
    code: '0000',
    result:
      '@pick(["http://mv-res.xdplt.com/sandbox/2020/07/25/EB7650B54A904B6A3DEE813F2911D64E.mp4","http://adsmind.ugdtimg.com/ads_svp_video__0b53maaoqaaapeac5rjdhjqruyae5bqab2ca.f140112.mp4?dis_k=be0ddab5642b3b515c867116d61606f6&dis_t=1629734714&m=5a17db8dcdd481798db845a609e8cd4b&stdfrom=15"])'
  })
  Mock.mock(/^\/api\/v\d+\/upload/, 'put', {
    code: '0000',
    result:
      '@pick(["http://mv-res.xdplt.com/sandbox/2020/07/25/EB7650B54A904B6A3DEE813F2911D64E.mp4","http://adsmind.ugdtimg.com/ads_svp_video__0b53maaoqaaapeac5rjdhjqruyae5bqab2ca.f140112.mp4?dis_k=be0ddab5642b3b515c867116d61606f6&dis_t=1629734714&m=5a17db8dcdd481798db845a609e8cd4b&stdfrom=15"])'
  })
  Mock.mock(/^\/api\/v\d+\/video\/folder\/logo/, 'post', {
    code: '0000',
    result: {
      url: 'http://mv-res.xdplt.com/sandbox/2020/07/25/EF7C5661EEBE8530768F64E7BAD7482F.jpg'
    }
  })
  Mock.mock(/^\/api\/v\d+\/tixian\/user\/operate\/black\/upload/, 'post', {
    code: '0000',
    result: 'mock'
  })

  // ==换脸== 视频/人脸 库上传接口 { file: 文件, type: "image / video" }
  Mock.mock(/\/api\/v\d+\/face\/upload/, 'post', {
    code: '0000',
    result: {
      id: 1351212423, // 图片/视频唯一id
      url: '@pick(["http://mv-res.xdplt.com/sandbox/2020/07/25/EB7650B54A904B6A3DEE813F2911D64E.mp4","http://adsmind.ugdtimg.com/ads_svp_video__0b53maaoqaaapeac5rjdhjqruyae5bqab2ca.f140112.mp4?dis_k=be0ddab5642b3b515c867116d61606f6&dis_t=1629734714&m=5a17db8dcdd481798db845a609e8cd4b&stdfrom=15"])', // 视频
      // url: 'http://mv-res.xdplt.com/sandbox/2020/07/25/EF7C5661EEBE8530768F64E7BAD7482F.jpg',
      file_md5: 'mjcijni2n3rindi23undi23und2iu3dn', // 文件md5
      w: 1280,
      h: 720,
      create_time: 1635164595300, // 创建时间
      duration: 7, // 单位：秒（仅视频有值）
      title: '火线妹' // 上传该视频时候的文件名
    }
  })

  // 账号管理
  Mock.mock(/\/m\/account\?/, 'get', account.list)
  Mock.mock(/\/m\/account/, 'post', defaultSuccess)
  Mock.mock(/\/m\/account\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/account\/\d+/, 'delete', defaultSuccess)

  // 广告位管理
  Mock.mock(/\/m\/placement\/all/, 'get', placement.all)
  Mock.mock(/\/m\/placement\?/, 'get', placement.list)
  Mock.mock(/\/m\/placement/, 'post', defaultSuccess)
  Mock.mock(/\/m\/placement\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/placement\/\d+\/\d+/, 'delete', defaultSuccess)

  // 广告位类型管理
  Mock.mock(/\/m\/placement\/type\/all/, 'get', placementType.all)
  Mock.mock(/\/m\/placement\/type\?/, 'get', placementType.list)
  Mock.mock(/\/m\/placement\/type/, 'post', defaultSuccess)
  Mock.mock(/\/m\/placement\/type\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/placement\/type\/\d+/, 'delete', defaultSuccess)

  // 渠道广告位类型管理
  Mock.mock(/\/m\/placement\/channel\/type\/all/, 'get', channelPlacementType.all)
  Mock.mock(/\/m\/placement\/channel\/type\?/, 'get', channelPlacementType.list)
  Mock.mock(/\/m\/placement\/channel\/type/, 'post', defaultSuccess)
  Mock.mock(/\/m\/placement\/channel\/type\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/placement\/channel\/type\/\d+/, 'delete', defaultSuccess)

  // 渠道应用管理
  Mock.mock(/\/m\/channel\/app\?/, 'get', channelApp.list)
  Mock.mock(/\/m\/channel\/app/, 'post', defaultSuccess)
  Mock.mock(/\/m\/channel\/app\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/channel\/app\/\d+/, 'delete', defaultSuccess)

  // 渠道广告位配置管理
  Mock.mock(/\/m\/channel\/placement\/config\?/, 'get', channelPlacementConfig.list)
  Mock.mock(/\/m\/channel\/placement\/config/, 'post', defaultSuccess)
  Mock.mock(/\/m\/channel\/placement\/config\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/channel\/placement\/config\/\d+/, 'delete', defaultSuccess)

  // 渠道广告位Mediation管理
  Mock.mock(/\/m\/channel\/placement\/mediation\?/, 'get', channelPlacementMediation.list)
  Mock.mock(/\/m\/channel\/placement\/mediation/, 'post', defaultSuccess)
  Mock.mock(/\/m\/channel\/placement\/mediation\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/channel\/placement\/mediation\/\d+/, 'delete', defaultSuccess)

  // 渠道广告位管理
  Mock.mock(/\/m\/channel\/placement\?/, 'get', channelPlacement.list)
  Mock.mock(/\/m\/channel\/placement/, 'post', defaultSuccess)
  Mock.mock(/\/m\/channel\/placement\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/m\/channel\/placement\/\d+/, 'delete', defaultSuccess)

  // 应用内事件
  Mock.mock(/^\/api\/v\d\/events\/distribution\?/, 'get', events.distribution.list)
  Mock.mock(/^\/api\/v\d\/event\?/, 'get', events.list)
  Mock.mock(/^\/api\/v\d\/event/, 'post', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/event\/\d+/, 'put', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/event\/\d+/, 'delete', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/event\/copy/, 'post', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/event\/sort/, 'post', defaultSuccess)

  // ==网赚== 提现审核
  Mock.mock(/^\/api\/v\d\/wz\/withdrawal\/audit\/list/, 'get', withdrawalAudit.list)
  Mock.mock(/^\/api\/v\d\/wz\/withdrawal\/audit\/config/, 'get', withdrawalAudit.config)
  Mock.mock(/^\/api\/v\d\/wz\/withdrawal\/audit/, 'put', defaultSuccess)

  // ==用户操作== 用户黑名单
  Mock.mock(/^\/api\/v\d\/wz\/black\/detail/, 'get', blackList.list)
  Mock.mock(/^\/api\/v\d\/wz\/black\/upload/, 'post', blackList.upload)

  // ==换脸==
  Mock.mock(/^\/api\/v\d\/face\/task\/list\?/, 'get', videoTask.list)
  Mock.mock(/^\/api\/v\d\/face\/image\/list/, 'get', face.photoMeterialList)
  Mock.mock(/^\/api\/v\d\/face\/video\/list/, 'get', face.videoMeterialList)
  Mock.mock(/^\/api\/v\d\/face\/task/, 'post', defaultSuccess)
  Mock.mock(/\/face\/collect/, 'post', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/event\/\d+/, 'put', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/face\/image/, 'delete', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/face\/video/, 'delete', defaultSuccess)

  // ==Redis 配置==
  // Mock.mock(/^\/api\/v\d\/app\/rconfig/, 'get', setting.mockRedisMapList)
  Mock.mock(/^\/api\/v\d\/app\/rconfig\/status/, 'post', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/app\/rconfig/, 'post', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/app\/rconfig\/\d+/, 'put', defaultSuccess)
  Mock.mock(/^\/api\/v\d\/app\/rconfig\/\d+/, 'delete', defaultSuccess)

  // 渠道
  Mock.mock(/^\/api\/v\d\/source/, 'get', source.list)
  Mock.mock(/\/source/, 'post', defaultSuccess)
  Mock.mock(/\/source\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/source\/\d+/, 'delete', defaultSuccess)

  // 操作日志
  Mock.mock(/\/operation\/log\?/, 'get', log.list)

  // tracking
  Mock.mock(/\/(campaign|ad|creative)\?/, 'get', tracking.campaignList)
  Mock.mock(/\/(campaign|ad|creative)\/inventory\?/, 'get', tracking.inventoryList)
  Mock.mock(/\/creative\/material\/\d+/, 'get', tracking.materials)
  // Mock.mock(/\/roi\/detail(\/vip)?\?/, 'get', tracking.roiDetail)
  // Mock.mock(/\/ad\/update\/status/, 'put', defaultSuccess)
  Mock.mock(/\/ad\/update\/status/, 'put', tracking.updateStatus)

  // 投放产品
  Mock.mock(/\/launch\/app\?/, 'get', delivery.product)
  Mock.mock(/\/launch\/app\/chart\?/, 'get', delivery.productChart)
  Mock.mock(/\/advertiser\?/, 'get', delivery.advertiser)
  Mock.mock(/\/media\?/, 'get', delivery.media)
  Mock.mock(/\/material\/data\?/, 'get', delivery.materialReport)
  // UnionSite
  Mock.mock(/\/union\/site\?/, 'get', tracking.unionSite)

  // 产品概览
  Mock.mock(/\/revenue\/summary\?/, 'get', summary.list)
  Mock.mock(/\/revenue\/chart\/compare\?/, 'get', summary.compare)
  Mock.mock(/\/revenue\/chart\?/, 'get', summary.chart)
  // 产品收入
  Mock.mock(/\/roi\/summary\?/, 'get', roi.list)
  Mock.mock(/\/roi\/chart(\/compare)?\?/, 'get', roi.chart)

  // 素材预览
  Mock.mock(/\/material\/stat\?/, 'get', materialOverview.latestOverviewData)
  Mock.mock(/\/material\/stat\/detail\?/, 'get', materialOverview.table)

  // 素材库
  Mock.mock(/\/api\/v\d\/material\?/, 'get', material.list)
  Mock.mock(/\/api\/v\d\/material\/oversea\/top(\?)?/, 'get', material.overseaTopList)
  Mock.mock(/\/api\/v\d\/material\/top(\?)?/, 'get', material.topList)
  Mock.mock(/\/api\/v\d\/material\/app\?/, 'get', material.app)
  // 海外素材
  Mock.mock(/\/material\/oversea\?/, 'get', material.overseaList)

  Mock.mock(/\/(campaign|ad)\/info\/search\?/, 'get', tracking.campaignInfoSearch)
  // topics
  Mock.mock(/\/topics/, 'post', defaultSuccess)

  // 返点
  Mock.mock(/\/channel\/rebate\/config\?/, 'get', rebates.list)
  Mock.mock(/\/channel\/rebate/, 'post', defaultSuccess)
  Mock.mock(/\/channel\/rebate\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/channel\/rebate/, 'delete', defaultSuccess)
  Mock.mock(/\/channel\/rebate\/upload/, 'post', rebates.upload)
  Mock.mock(/\/channel\/account/, 'get', rebates.accounts)
  // 媒体包配置
  Mock.mock(/\/flow\/package\?/, 'get', unionGroup.list)
  Mock.mock(/\/flow\/package\/all/, 'get', unionGroup.all)
  Mock.mock(/\/flow\/package\/detail\?/, 'get', unionGroup.detail)
  Mock.mock(/\/flow\/package\/publish(\?)?/, 'get', defaultSuccess)

  // 渠道点击联调
  Mock.mock(/\/tools\/click/, 'post', defaultSuccess)

  // 转化联调
  Mock.mock(/\/tools\/click/, 'get', mockClickInfo)
  Mock.mock(/\/tools\/ac\/history/, 'get', mockSendHistory)
  Mock.mock(/\/tools\/active/, 'post', defaultSuccess)
  Mock.mock(/\/tools\/conversion/, 'post', defaultSuccess)

  // 收入数据录入
  Mock.mock(/\/app\/revenue\/enter\?/, 'get', summary.enterRevenue)
  Mock.mock(/\/app\/revenue\/enter/, 'post', defaultSuccess)
  Mock.mock(/\/app\/revenue\/enter\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/app\/revenue\/enter\/\d+/, 'delete', defaultSuccess)

  // 测试数据清理
  Mock.mock(/\/wz\/testing\/tool\?/, 'get', mockDataClearList)
  Mock.mock(/\/wz\/testing\/tool/, 'post', defaultSuccess)

  // 数据字典管理
  Mock.mock(/\/data\/dictionary\/all/, 'get', dataDictionary.all)
  Mock.mock(/\/data\/dictionary\?/, 'get', dataDictionary.list)
  Mock.mock(/\/data\/dictionary/, 'post', defaultSuccess)
  Mock.mock(/\/data\/dictionary\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/data\/dictionary\/\d+/, 'delete', defaultSuccess)

  // 数据字典项管理
  Mock.mock(/\/data\/dictionary\/item\/code\?/, 'get', dataDictionaryItem.options)

  Mock.mock(
    /\/data\/dictionary\/item.+DIC_ACCOUNT_TYPE/,
    'get',
    mockDictionaryItemListMap.DIC_ACCOUNT_TYPE
  ) // USE-账号类型 - 假数据
  Mock.mock(
    /\/data\/dictionary\/item.+DIC_CHANNEL_APP_STATUS/,
    'get',
    mockDictionaryItemListMap.DIC_CHANNEL_APP_STATUS
  )
  Mock.mock(
    /\/data\/dictionary\/item.+DIC_CHANNEL_PLACEMENT_STATUS/,
    'get',
    mockDictionaryItemListMap.DIC_CHANNEL_PLACEMENT_STATUS
  )
  Mock.mock(
    /\/data\/dictionary\/item.+DIC_MEDIATION_CHANNEL/,
    'get',
    mockDictionaryItemListMap.DIC_MEDIATION_CHANNEL
  )
  Mock.mock(
    /\/data\/dictionary\/item.+DIC_PLACEMENT_ORIENTATION/,
    'get',
    mockDictionaryItemListMap.DIC_PLACEMENT_ORIENTATION
  )
  Mock.mock(
    /\/data\/dictionary\/item.+DIC_PLACEMENT_PULL_MODE/,
    'get',
    mockDictionaryItemListMap.DIC_PLACEMENT_PULL_MODE
  )
  Mock.mock(
    /\/data\/dictionary\/item.+DIC_PLACEMENT_STATUS/,
    'get',
    mockDictionaryItemListMap.DIC_PLACEMENT_STATUS
  )
  Mock.mock(/\/data\/dictionary\/item.+DIC_TASK_TAG/, 'get', mockDictionaryItemListMap.DIC_TASK_TAG) // USE-任务标签 - 假数据

  Mock.mock(/\/data\/dictionary\/item/, 'post', defaultSuccess)
  Mock.mock(/\/data\/dictionary\/item\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/data\/dictionary\/item\/\d+/, 'delete', defaultSuccess)
  // 报警监控
  Mock.mock(/\/business\/monitor\?/, 'get', businessMonitor.list)
  Mock.mock(/\/business\/monitor\/count/, 'get', businessMonitor.count)
  // 推广管理
  Mock.mock(/\/promotion\/tt\/title\?/, 'get', promotion.title.list)
  Mock.mock(/\/promotion\/tt\/title(\/(category|package))?/, 'post', defaultSuccess)
  Mock.mock(/\/promotion\/tt\/title(\/(category|package))?\/\d+/, 'put', defaultSuccess)
  Mock.mock(/\/promotion\/tt\/title(\/(category|package))?\/\d+/, 'delete', defaultSuccess)
  Mock.mock(/\/promotion\/tt\/title\/category(\?)?/, 'get', promotion.title.category)
  Mock.mock(/\/promotion\/tt\/title\/package(\?)?/, 'get', promotion.title.titlePackage)
  // Mock.mock(/\/promotion\/tt\/title\/category/, 'get', promotion.title.category)
}

export default Mock
