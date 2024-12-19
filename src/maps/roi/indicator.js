/**
 * // indicator: {
  //   roi: '当日ROI',
  //   finalRoi: '当日ROI(减返点)',
  //   totalRoi: '累计ROI',
  //   roc: 'ROC',
  //   totalRoc: '累计ROC',
  //   // finalTotalRoi: '累计ROI(折后)',
  //   dau: 'DAU',
  //   showUv: '展示DAU',
  //   newUser: '新增',
  //   active: '转化',
  //   allCost: '总成本',
  //   cost: '投放成本',
  //   // finalCost: '投放成本(折后)',
  //   avgAddCost: '新增单价',
  //   finalAvgAddCost: '新增单价(折后)',
  //   unitPrice: '转化单价',
  //   revenue: '广告收入',
  //   appProfit: '付费收入',
  //   dayTotalRevenue: '总收入',
  //   arpu: 'ARPU',
  //   showArpu: '展示ARPU',
  //   totalAllCost: '累计总成本',
  //   totalCost: '累计投放成本',
  //   totalRevenue: '累计收入',
  //   profit: '累计利润'
  // }
 */
// 2022-12-22指标更新
const indicator = [
  {
    prop: 'roi',
    label: 'ROI',
    description: 'ROI=（广告收入+付费收入）/（投放成本-返点+提现）',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'dayProfit',
    label: '利润',
    description: '利润 = (广告收入+付费收入)-(投放成本+提现成本-赔付-共享捐款)',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'dayTotalRevenue',
    label: '总收入',
    description: '总收入=广告收入+付费收入',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'allCost',
    label: '总成本',
    description: '总成本 = 成本-返点+提现成本+线下成本',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'avgAddCost',
    label: '新增单价',
    description: '新增单价=（投放成本-返点）/ 新增用户',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'unitPrice',
    label: '转化单价',
    description: '转化单价=（成本-返点成本）/ 激活',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'cost',
    label: '投放成本',
    description: '投放成本=成本-返点',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'roa',
    label: '投放比',
    description: '投放比 =（付费收入+广告收入）/(投放成本-返点)',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'withdrawAmount',
    label: '提现成本',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'withdrawRatio',
    label: '提现收入比',
    description: '提现收入比=提现收入/广告收入',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'offlineCost',
    label: '线下成本',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'totalOfflineCost',
    label: '累计线下成本',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'rebateCost',
    label: '返点',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'compensationAmount',
    label: '赔付金额',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'sharedWalletCost',
    label: '共享赠款',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'passAmount',
    label: '通道费',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'adRevenue',
    label: '广告收入',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'appProfit',
    label: '付费收入',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'noWzRevenue',
    label: '非网赚收入',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },

  {
    prop: 'refundAmount',
    label: '退款金额',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'refundAmountRatio',
    label: '退款金额占比',
    description: '',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'refundUv',
    label: '退款用户数',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'refundUvRatio',
    label: '退款用户占比',
    description: '',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'newUser',
    label: '新增',
    description: 'Token维度，去重周期180天',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'newGaidUv',
    label: '新增GAID',
    description: '单包新增用户(tk维度)的GAID在全局GAID库未出现过(180天)',
    format: {
      type: 'integer'
    }
  },
  // {
  //   prop: 'recallAllUv',
  //   label: '新增GAID召回',
  //   description: '单包新增用户(tk维度)的GAID 在180天全局GAID库出现过的用户',
  //   format: {
  //     type: 'integer'
  //   }
  // },
  {
    prop: 'recallAllRate',
    label: '新增GAID召回率',
    description: '单包新增用户(tk维度)的GAID在全局GAID库出现过(180天)/单包新增用户(TK 维度)',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  // {
  //   prop: 'recallAllUv',
  //   label: '跨产品召回',
  //   description: '跨产品召回（去重周期90天）<br/><br/>即90天之前在<strong class="underline">任意产品</strong>激活(Alive)过的GAID，本周期在<strong class="underline">本产品</strong>被重复激活',
  //   format: {
  //     type: 'integer'
  //   }
  // },
  // {
  //   prop: 'recallAllRate',
  //   label: '跨产品召回率',
  //   description: '',
  //   format: {
  //     type: 'percent',
  //     decimal: 1
  //   }
  // },
  {
    prop: 'newGlobalGaidUv',
    label: '全局新增GAID',
    description: '全局新增用户(tk维度)的gaid 在180天内全局GAID库 未出现过',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'recallGlobalGaidUv',
    label: '全局新增GAID召回',
    description: '全局新增用户(tk维度)的 GAID在180天内全局GAID库出现过的用户',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'recallGlobalGaidRate',
    label: '全局新增GAID召回率',
    description:
      '全局新增用户(tk维度)的 GAID在180天内全局GAID库出现过的用户/ 全局新增用户(tk维度)的GAID',
    format: {
      type: 'percent',
      decimal: 2
    }
  },
  {
    prop: 'active',
    label: '转化',
    description: '渠道同步过来的激活数据',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'dau',
    label: 'DAU',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'showUv',
    label: '展示DAU',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'wzUv',
    label: '网赚用户',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'wzUvRatio',
    label: '网赚用户占比',
    description: '网赚用户/DAU',
    format: {
      type: 'percent',
      decimal: 2
    }
  },
  {
    prop: 'arpu',
    label: 'ARPU',
    description: '（广告收入+付费收入）/ DAU',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'showArpu',
    label: '展示ARPU',
    description: '展示ARPU=（广告收入+付费收入）/ 展示DAU',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'aipu',
    label: 'AIPU',
    description: 'AIPU = 展示/展示UV',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'ecpm',
    label: 'eCPM',
    description: 'eCPM=广告收入*1000/展示',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'totalCost',
    label: '累计投放成本',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'totalWithdrawAmount',
    label: '累计提现成本',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'totalRebateCost',
    label: '累计返点',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'totalAllCost',
    label: '累计总成本',
    description: '累计总成本 = 累计的投放成本+累计的提现成本-累计返点-累计赔付-共享捐款',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'totalRevenue',
    label: '累计总收入',
    description: '累计总收入=累计的广告收入+累计的付费收入',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'totalRoi',
    label: '累计ROI',
    description: '累计ROI=（累计广告收入+累计付费收入）/（累计投放成本-累计返点+累计提现）',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'profit',
    label: '累计利润',
    description:
      '累计利润=累计广告收入+累计付费收入-累计投放成本-累计提现+累计赔付+累计共享捐款+累计返点',
    format: {
      type: 'integer'
    }
  }
]
indicator.labelMap = indicator.reduce((newObj, eachInd) => {
  if (eachInd.prop) {
    newObj[eachInd.prop] = eachInd.label || eachInd.prop
  }
  return newObj
}, {})
export default indicator
