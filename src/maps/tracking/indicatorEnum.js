// TODO 移到thirdParty对应渠道文件夹下，并修改对应的过滤器
// 巨量引擎 指标枚举值
// https://ad.oceanengine.com/openapi/doc/index.html?id=528
// 百度
// https://dev2.baidu.com/content?sceneType=0&pageId=100052&nodeId=73&subhead=
export default {
  deepExternalAction: {
    // 深度转化目标
    csj: {
      AD_CONVERT_TYPE_ACTIVE_REGISTER: '注册',
      AD_CONVERT_TYPE_NEXT_DAY_OPEN: '次留',
      AD_CONVERT_TYPE_LT_ROI: '广告变现ROI',
      AD_CONVERT_TYPE_PURCHASE_ROI: '付费ROI',
      AD_CONVERT_TYPE_GAME_ADDICTION: '关键行为',
      AD_CONVERT_TYPE_PAY: '付费'
    },
    baidu: {
      // 信息流广告投放 > 推广计划 > oCPC设置对象 > deepTransType
      25: '注册',
      26: '付费',
      27: '客户自定义',
      28: '次日留存',
      45: '商品下单成功',
      53: '订单核对成功',
      54: '收货成功'
    }
  },
  // 转化类型, 头条转化类型大概200多个，这里只列举常用的做映射，其余直接显示原始值
  externalAction: {
    csj: {
      AD_CONVERT_TYPE_ACTIVE: '激活',
      AD_CONVERT_TYPE_ACTIVE_REGISTER: '注册',
      AD_CONVERT_TYPE_PAY: '付费',
      AD_CONVERT_TYPE_GAME_ADDICTION: '关键行为' // （原深度转化）
    },
    baidu: {
      // 信息流广告投放 > 推广计划 > oCPC设置对象 > transType
      1: '咨询按钮点击',
      2: '电话按钮点击',
      3: '表单提交成功',
      4: 'APP激活',
      5: '表单按钮点击',
      14: '订单提交成功',
      19: '有效咨询',
      25: '注册',
      35: '微信复制按钮点击',
      41: '申请',
      42: '授信',
      45: '商品下单成功',
      46: '电商加购',
      47: '电商收藏',
      48: '电商商详页到达',
      71: '应用调起',
      26: '付费'
    }
  },
  // 计划出价类型
  pricing: {
    PRICING_CPC: 'CPC',
    PRICING_CPM: 'CPM',
    PRICING_OCPC: 'OCPC',
    PRICING_OCPM: 'OCPM',
    PRICING_CPV: 'CPV',
    PRICING_CPA: 'CPA'
  }
}
