import sourceList from '@/store/module/source/revenueSource'
import { slotTypeName } from '../mediation/sspSlotType'
import indicator from './indicator'
const source = {}
const subSource = {}
sourceList.forEach((v) => {
  const { code, name, account } = v
  source[code] = `${name}`
  account.forEach((item) => {
    const _name = `${item.name} (${name})`
    const _code = item.code
    subSource[_code] = _name
  })
})
const slotType = slotTypeName.map((v) => v.name)
// const slotType = [
//   // '信息流',
//   'Draw视频',
//   '原生信息流',
//   '全屏视频',
//   '开屏',
//   // 'Draw信息流',
//   '插屏',
//   '激励视频',
//   'Banner'
// ]
export default {
  source,
  subSource,
  sourceList,
  slotType,
  indicator
  // indicator: {
  //   dau: 'DAU',
  //   imp: '展示',
  //   click: '点击',
  //   dayTotalRevenue: '总收入',
  //   adRevenue: '广告收入',
  //   appProfit: '付费收入',
  //   newUser: '新增',
  //   totalCost: '总成本',
  //   cost: '投放成本',
  //   roi: 'ROI',
  //   roa: '投放比',
  //   // roa2: '投放比2(含提现成本)',
  //   avgImp: '人均展示',
  //   avgClick: '人均点击',
  //   arpu: 'DARPU',
  //   ctr: 'CTR',
  //   cpm: 'eCPM',
  //   cpc: 'CPC'
  // }
}
