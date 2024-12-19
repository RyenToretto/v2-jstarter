import conversionEvent from './conversionEvent/index.js'
export const SELF_ATTRIBUTION = 'self'
export const TENJIN_ATTRIBUTION = 'tenjin'
export const ADJUST_ATTRIBUTION = 'adjust'
export const INTERNAL_ATTRIBUTIONS = [SELF_ATTRIBUTION]
export const OVERSEA_ATTRIBUTIONS = [ADJUST_ATTRIBUTION, TENJIN_ATTRIBUTION]
export default {
  idToName: {},
  idToIcon: {},
  pkgToName: {},
  pkgToId: {},
  idToPkg: {},
  appType: {
    ad: '广告',
    vip: '付费',
    other: '其它'
  },
  category: {
    tool: '工具',
    game: '游戏',
    drama: '短剧',
    video: '视频',
    social: '社交',
    other: '其它'
  },
  // pkg映射应用图标（有接口动态添加）
  pkgToIcon: {},
  // 归因模式
  attributionMode: {
    // ym: '友盟',
    [SELF_ATTRIBUTION]: '自归因',
    [TENJIN_ATTRIBUTION]: 'Tenjin',
    [ADJUST_ATTRIBUTION]: 'Adjust'
  },
  // 归因条件
  attributionCondition: {
    key: '事件',
    'arpu-cpm': 'ARPU（CPM）'
    // 'arpu-cpc': 'ARPU（CPC）',
    // 'roi-cpm': 'ROI（CPM）',
    // 'roi-cpc': 'ROI（CPC）',
    // 'num-ad': 'NUM（AD）'
  },
  conversionEvent,
  attribution: {
    label: {
      active_type: '激活方式',
      active: '激活条件',
      conversion_type: '转化方式',
      conversion: '转化条件',
      conversion_event: '转化目标'
    }
  },
  abTestEntries: [
    [0, '正式流量'],
    [1, '小流量'],
    [101, '验证环境1'],
    [102, '验证环境2'],
    [103, '验证环境3'],
    [104, '验证环境4'],
    [105, '验证环境5']
  ],
  // 用户去重周期
  userDupDays: [
    [60, '60天'],
    [30, '30天'],
    [14, '14天'],
    [7, '7天']
  ],
  tags: {
    internal: '国内产品',
    oversea: '海外产品',
    wz: '网赚业务',
    wg: '简易网赚', // from laojiang 20240205
    subscribe: '订阅业务',
    recharge: '充值业务',
    // quickapp: '快应用',
    jifen: '积分产品'
  }
}
