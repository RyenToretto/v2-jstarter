// https://open.oceanengine.com/labels/7/docs/1696710760171535#首选投放位置
const csj = [
  { code: 'INVENTORY_UNION_SLOT', name: '穿山甲' },
  { code: 'INVENTORY_AWEME_FEED', name: '抖音信息流' },
  { code: 'INVENTORY_FEED', name: '头条信息流' },
  { code: 'INVENTORY_AWEME_SEARCH', name: '搜索广告——抖音位' },
  { code: 'INVENTORY_SEARCH', name: '搜索广告——头条位' },
  // { code: ' INVENTORY_TEXT_LINK', name: '头条文章详情页（已废弃）' },
  { code: 'INVENTORY_VIDEO_FEED', name: '西瓜信息流' },
  { code: 'INVENTORY_HOTSOON_FEED', name: '火山信息流' },
  { code: 'UNION_BOUTIQUE_GAME', name: '穿山甲精选休闲游戏' },
  { code: 'INVENTORY_UNION_SPLASH_SLOT', name: '穿山甲开屏广告' },
  { code: 'INVENTORY_UNIVERSAL', name: '通投智选' },
  { code: 'INVENTORY_BEAUTY', name: '轻颜相机' },
  { code: 'INVENTORY_PIPIXIA', name: '皮皮虾' },
  { code: 'INVENTORY_AUTOMOBILE', name: '懂车帝' },
  { code: 'INVENTORY_STUDY', name: '好好学习' },
  { code: 'INVENTORY_FACE_U', name: 'faceu' },
  { code: 'INVENTORY_TOMATO_NOVEL', name: '番茄小说' }
]
/*
 taken from '__CSITE__' field. https://developers.e.kuaishou.com/docs?docType=DSP&documentId=1942
 接口数据直接给的中文，直接展示即可无需过滤。
 code跟name设置成一样是为了兼容下拉框统一遍历
*/
const ks = [
  '优选广告',
  '信息流广告', // 2-信息流广告（旧投放场景，含上下滑大屏广告）
  '视频播放页广告',
  '联盟',
  '上下滑大屏广告',
  // '信息流广告', // 7-信息流广告（不含上下滑大屏广告）
  '开屏位置',
  '搜索广告'
].map((v) => {
  return {
    code: v,
    name: v
  }
})
/*
taken form https://developers.e.qq.com/docs/guide/conversion/new_version/dianjijiance
keywords '__SITE_SET_NAME__'
*/
const gdt = [
  {
    code: 'SITE_SET_MOBILE_UNION',
    name: '优量汇'
  },
  {
    code: 'SITE_SET_MOBILE_YYB',
    name: '应用宝'
  },
  {
    code: 'SITE_SET_CHANNELS',
    name: '微信视频号'
  },
  {
    code: 'SITE_SET_KANDIAN',
    name: '腾讯看点'
  },
  {
    code: 'SITE_SET_MINI_GAME_QQ',
    name: 'QQ小游戏'
  },
  {
    code: 'SITE_SET_MINI_GAME_WECHAT',
    name: '微信小游戏'
  },
  {
    code: 'SITE_SET_MOBILE_GAME',
    name: 'App游戏'
  },
  {
    code: 'SITE_SET_MOBILE_INNER',
    name: 'QQ、腾讯看点、腾讯音乐（待废弃）'
  },
  {
    code: 'SITE_SET_MOMENTS',
    name: '微信朋友圈'
  },
  {
    code: 'SITE_SET_PCQQ',
    name: 'PC QQ、QQ 空间、腾讯音乐'
  },
  {
    code: 'SITE_SET_QBSEARCH',
    name: 'QQ浏览器、应用宝版位'
  },
  {
    code: 'SITE_SET_QQ_MUSIC_GAME',
    name: 'QQ、腾讯音乐及游戏'
  },
  {
    code: 'SITE_SET_TENCENT_NEWS',
    name: '腾讯新闻'
  },
  {
    code: 'SITE_SET_TENCENT_VIDEO',
    name: '腾讯视频'
  },
  {
    code: 'SITE_SET_WECHAT',
    name: '微信公众号与小程序'
  },
  {
    code: 'SITE_SET_WECHAT_SEARCH',
    name: '微信搜一搜'
  }
]
export default {
  csj,
  ks,
  gdt
}
