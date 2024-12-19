import inventory from './inventory'
import status from './status'
import indicatorEnum from './indicatorEnum'
import indicator from './indicator'
import material from './material'
import monitoring from './monitoring'
export default {
  dim: {
    campaign: '广告组',
    ad: '广告计划',
    creative: '广告创意'
  },
  queryLabel: {
    advertiserId: '账号',
    campaignId: '广告组ID',
    campaignName: '广告组',
    adId: '广告计划ID',
    adName: '广告计划',
    creativeId: '广告创意ID',
    startDate: '启动时间',
    lastDay: '持续天数',
    agent: '一级渠道',
    mid: '素材',
    optimizer: '优化师',
    roi: 'ROI',
    cost: '成本',
    adProtectStatus: '赔付状态',
    convertPrice: '转化单价'
  },
  inventory,
  status,
  indicator,
  indicatorEnum,
  monitoring,
  material
}
