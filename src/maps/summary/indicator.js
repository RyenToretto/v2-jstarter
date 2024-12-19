const indicator = [
  {
    prop: 'dau',
    label: 'DAU',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'request',
    label: '广告位请求',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'response',
    label: '广告位填充',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'fillRate',
    label: '广告位填充率',
    description: '广告位填充 / 广告位请求',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'exposureRate',
    label: '广告位曝光率',
    description: '展示 / 广告位响应',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'adRequestCount',
    label: '广告请求',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'adReturnCount',
    label: '广告填充',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'adFillRate',
    label: '广告填充率',
    description: '广告填充 / 广告请求',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'biddingWinReportCount',
    label: '竞胜回传',
    description: '竞价成功回传次数',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'biddingLoseReportCount',
    label: '竞败回传',
    description: '竞价失败回传次数',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'biddingWinRate',
    label: '竞价成功率',
    description: '竞胜回传 / 竞价回传',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'biddingWinExposeRate',
    label: '竞胜曝光率',
    description: '广告展示 / 竞胜回传',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'biddingTotalReportCount',
    label: '竞价回传',
    description: '竞价结果回传次数',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'biddingAdReportRate',
    label: '广告竞价回传率',
    description: '竞价回传 / 广告填充',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'biddingPidReportRate',
    label: '广告位竞价回传率',
    description: '竞价回传 / 广告位填充',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'imp',
    label: '广告展示',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'click',
    label: '广告点击',
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'dayTotalRevenue',
    label: '总收入',
    description: '广告收入 + 付费收入',
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
    prop: 'bidRevenue',
    label: '竞价收入',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'bidRevenueRatio',
    label: '竞价收入占比',
    description: '竞价收入 / 广告收入',
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
    description: '',
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'totalCost',
    label: '总成本',
    description: '投放成本 + 提现成本 + 线下成本',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'cost',
    label: '投放成本',
    description: '',
    format: {
      type: 'float',
      decimal: 2
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
    prop: 'roi',
    label: 'ROI',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'roa',
    label: '投放比',
    description: '(付费收入+广告收入) / (投放成本-返点)',
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
    prop: 'avgImp',
    label: '人均展示',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'avgClick',
    label: '人均点击',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'arpu',
    label: 'DARPU',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'ctr',
    label: 'CTR',
    description: '',
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'cpm',
    label: 'eCPM',
    description: '',
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'dayProfit',
    label: '利润',
    description: '利润 = 广告收入+付费收入-投放成本-提现+赔付+共享捐款+返点',
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
  // {
  //   prop: '',
  //   label: '',
  //   description: '',
  //   format: {
  //     type: 'integer'
  //   }
  // },
]

indicator.labelMap = indicator.reduce((newObj, eachInd) => {
  if (eachInd.prop) {
    newObj[eachInd.prop] = eachInd.label || eachInd.prop
  }
  return newObj
}, {})

export default indicator
