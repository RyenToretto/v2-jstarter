// 广告类型
export const slotTypeName = [
  // 2022-03-02 laojiang
  {
    type: 'reward',
    name: '激励视频'
  },
  {
    type: 'splash',
    name: '开屏'
  },
  {
    type: 'feed',
    name: '信息流'
  },
  {
    type: 'fullscreen',
    name: '全屏视频'
  },
  {
    type: 'interstitial',
    name: '插屏'
  },
  {
    type: 'banner',
    name: 'Banner'
  },
  // 海外业务场景特殊类型
  {
    type: 'interstitial_and_reward',
    name: '插屏+激励视频'
  },
  {
    type: 'OfferWall', // 海外积分墙
    name: '积分墙'
  },
  {
    type: 'other',
    name: '其它'
  }
]
export default {
  601: '插屏',
  602: '开屏',
  603: 'Banner',
  604: '全屏视频',
  605: '原生信息流',
  606: 'Draw视频',
  607: '激励视频'
}
