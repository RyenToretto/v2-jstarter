import '@/assets/css/page/campaign.less'
import indicatorCell from '@/components/tracking/indicatorCell'
import indicatorItem from '@/components/tracking/indicatorColumn/item'
// import indicatorEnum from '@/maps/tracking/indicatorEnum'

const indicatorSortOrders = ['descending', 'ascending']
const allIndicators = [
  {
    prop: 'show',
    compareWith: 'totalShow',
    label: '展示',
    align: 'right',
    minWidth: 90,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'click',
    compareWith: 'totalClick',
    label: '点击',
    labelDescription: '平台点击、回调点击\n累计点击',
    align: 'right',
    minWidth: 120,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'ctr',
    compareWith: 'totalCtr',
    label: 'CTR',
    align: 'right',
    minWidth: 80,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'ecpm',
    compareWith: 'totalEcpm',
    label: 'eCPM',
    align: 'right',
    minWidth: 70,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'downloadStart',
    compareWith: 'totalDownloadStart',
    label: '下载开始',
    align: 'right',
    minWidth: 90,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'downloadFinish',
    compareWith: 'totalDownloadFinish',
    label: '下载完成',
    align: 'right',
    minWidth: 90,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  // {
  //   prop: 'clickInstall',
  //   // compareWith: '',
  //   label: '点击安装',
  //   align: 'right',
  //   minWidth: 90,
  //   // showOverflowTooltip: true,
  //   sortable: 'custom',
  //   sortOrders: indicatorSortOrders,
  //   format: {
  //     type: 'integer'
  //   }
  // },
  {
    prop: 'installFinish',
    compareWith: 'totalInstallFinish',
    label: '安装完成',
    align: 'right',
    minWidth: 95,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  // {
  //   prop: 'installFinishRate',
  //   compareWith: 'totalInstallFinishRate',
  //   label: '安装完成率',
  //   align: 'right',
  //   minWidth: 100,
  //   // showOverflowTooltip: true,
  //   sortable: 'custom',
  //   sortOrders: indicatorSortOrders,
  //   format: {
  //     type: 'percent',
  //     decimal: 1
  //   }
  // },
  {
    prop: 'active',
    compareWith: 'totalActive',
    label: '激活/Cb',
    align: 'right',
    minWidth: 120,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'cvr',
    compareWith: 'totalCvr',
    label: 'CVR',
    labelDescription: '转化 / 点击',
    align: 'right',
    minWidth: 70,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    percentDecimalNumber: 1,
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'car',
    compareWith: 'totalCar',
    label: 'CAR',
    labelDescription: '激活 / 点击',
    align: 'right',
    minWidth: 70,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    percentDecimalNumber: 1,
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'avr',
    compareWith: 'totalAvr',
    label: 'AVR',
    labelDescription: '转化 / 激活',
    align: 'right',
    minWidth: 70,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    percentDecimalNumber: 1,
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'cost',
    compareWith: 'totalCost',
    label: '成本',
    align: 'right',
    minWidth: 100,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'bid',
    // deepCpabid: 深度转化出价
    // totalDeepCpabid: 累计深度转化出价
    compareWith: 'totalBid', // 累计出价
    onlyInReport: 'ad',
    label: '出价',
    align: 'right',
    minWidth: 100,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'unitPrice',
    compareWith: 'totalUnitPrice',
    label: '激活单价',
    align: 'right',
    minWidth: 90,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    dataCell: true,
    reversColor: true,
    format: {
      type: 'float',
      decimal: 2
    }
  },
  // {
  //   prop: 'register',
  //   label: '注册',
  //   align: 'right',
  //   minWidth: 78,
  //   format: {
  //     type: 'integer'
  //   }
  // },
  // {
  //   prop: 'payCount',
  //   label: '付费',
  //   align: 'right',
  //   minWidth: 78,
  //   format: {
  //     type: 'integer'
  //   }
  // },
  {
    // prop: 'convertId',
    prop: 'externalAction',
    // compareWith: 'deepExternalAction',
    label: '转化目标',
    align: 'center',
    onlyInReport: 'ad',
    showOverflowTooltip: true,
    minWidth: 90
    // format: {
    //   type: 'custom',
    //   formatter: (v) => { return indicatorEnum.externalAction[v] || v }
    // },
    // compareFormat: {
    //   type: 'custom',
    //   formatter: (v) => { return indicatorEnum.deepExternalAction[v] || v }
    // }
  },
  {
    prop: 'data_convert',
    compareWith: 'totalDataConvert',
    label: '转化',
    labelDescription: '转化/深度转化\n累计转化/ 累计深度转化',
    align: 'right',
    minWidth: 100,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  // {
  //   prop: 'attributionDeepConvert',
  //   onlyInReport: 'ad',
  //   label: '深度转化',
  //   align: 'right',
  //   minWidth: 90,
  //   sortable: 'custom',
  //   sortOrders: indicatorSortOrders,
  //   format: {
  //     type: 'integer'
  //   }
  // },
  // {
  //   prop: 'pricing',
  //   onlyInReport: 'ad',
  //   label: '出价类型',
  //   showOverflowTooltip: true,
  //   format: {
  //     type: 'custom',
  //     formatter: (v) => indicatorEnum.pricing[v] || v
  //   }
  // },
  {
    prop: 'convert_cost',
    compareWith: 'totalConvertCost',
    label: '转化单价',
    align: 'right',
    minWidth: 100,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    dataCell: true,
    reversColor: true,
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'skanConversion',
    label: 'SKAN转化',
    labelDescription: '',
    align: 'right',
    minWidth: 100,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'integer'
    }
  },
  {
    prop: 'activeRegisterCost',
    // compareWith: '',
    label: '注册/付费单价',
    align: 'right',
    minWidth: 115,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    format: {
      type: 'float',
      decimal: 2
    }
  },
  // {
  //   // prop: 'deepBidType',
  //   prop: 'deepExternalAction',
  //   onlyInReport: 'ad',
  //   label: '深度转化目标',
  //   // showOverflowTooltip: true,
  //   minWidth: 110,
  //   format: {
  //     type: 'custom',
  //     formatter: (v) => { return indicatorEnum.deepExternalAction[v] || v }
  //   }
  // },
  // {
  //   prop: 'deepCpabid',
  //   onlyInReport: 'ad',
  //   label: '深度转化出价',
  //   align: 'right',
  //   minWidth: 110,
  //   sortable: 'custom',
  //   sortOrders: indicatorSortOrders,
  //   format: {
  //     type: 'float',
  //     decimal: 2
  //   }
  // },
  // {
  //   prop: 'deepConvertCost',
  //   compareWith: 'totalAttributionDeepConvertCost',
  //   onlyInReport: 'ad',
  //   label: '深度转化单价',
  //   align: 'right',
  //   minWidth: 110,
  //   sortable: 'custom',
  //   sortOrders: indicatorSortOrders,
  //   format: {
  //     type: 'float',
  //     decimal: 2
  //   }
  // },
  {
    prop: 'attributionNextDayOpenCntRate',
    compareWith: 'totalAttributionNextDayOpenCntRate',
    label: '次留率',
    align: 'right',
    minWidth: 80,
    // showOverflowTooltip: true,
    sortable: 'custom',
    sortOrders: indicatorSortOrders,
    dataCell: true,
    format: {
      type: 'percent',
      decimal: 1
    }
  },
  {
    prop: 'hourRoa',
    label: '小时ROI',
    align: 'right',
    minWidth: 100,
    // sortable: 'custom',
    // sortOrders: indicatorSortOrders,
    format: {
      type: 'float',
      decimal: 2
    }
  },
  {
    prop: 'todayRoi',
    compareWith: 'lastRoi',
    label: 'ROI',
    align: 'right',
    minWidth: 90,
    // sortable: 'custom',
    // sortOrders: indicatorSortOrders,
    format: {
      type: 'float',
      decimal: 2
    }
  }
  // {
  //   prop: 'umengActive',
  //   label: '友盟激活',
  //   align: 'right',
  //   minWidth: 78,
  //   format: {
  //     type: 'integer'
  //   }
  // },
  // {
  //   prop: 'actualActive',
  //   label: '实际激活',
  //   align: 'right',
  //   minWidth: 78,
  //   format: {
  //     type: 'integer'
  //   }
  // }
]
export default {
  name: '',
  components: {
    indicatorCell,
    indicatorItem
  },
  data() {
    return {
      indicatorSortOrders,
      // 指标列配置
      indicators: [],
      // 报表生成时间
      reportUpdated: '',
      // 总计数据
      summaryData: {},
      // 各个指标的最小值
      minData: {},
      // 各个指标的最大值
      maxData: {}
    }
  },
  methods: {
    getIndicators(reportName) {
      const indicators = allIndicators.filter((v) => {
        let flag = true
        if (v.onlyInReport) {
          flag =
            typeof v.onlyInReport === 'string'
              ? v.onlyInReport === reportName
              : v.onlyInReport.includes(reportName)
        }
        if (v.label && typeof v.label === 'function') {
        }
        return flag
      })

      return indicators
    },
    handleSizeChange(size) {
      this.query.pageSize = size
      this.$store.commit('tracking/setPageSize', size)
      this.search && this.search(true)
    }
  }
}
