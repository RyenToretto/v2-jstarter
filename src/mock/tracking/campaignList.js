import event from './event'
export default {
  code: '0000',
  result: {
    total: 100,
    'lists|20': [
      {
        dataDate: '@integer(1577836800000,1609372800000)',
        pkg: 'com.shuhyakigame.untierope',
        appName: '应用-@cword(3,8)',
        source: '@pick(["csj", "ks", "baidu", "Organic"])',
        campaignName: '广告组_%@cword(8,15)',
        campaignId: '@uuid',
        adName: '广告计划_%@cword(8,20)',
        adId: '@id',
        // appvnList: ['1.@integer(0,9).@integer(0,9):@integer(0,9999)', '1.@integer(0,9).@integer(0,9):@integer(0,999)'],
        creativeId: "@string('number',16)",
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591698399624&di=af62774c63f9d986f8ee5635f53450ec&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F74ce0c21bc8d2226b7d9048daacfeb08bd4975722977a-LKoxTW_fw658',
        advertiserName: '账户@integer(1,99)',
        advertiserId: 'advertiserId-@integer(1,99)',
        agent: '@pick(["direct", "another"])',
        optimizer: '@string("upper", 2,3)',
        lastDay: '@integer(0,4)',
        deepExternalAction:
          '@pick(["AD_CONVERT_TYPE_ACTIVE_REGISTER", "AD_CONVERT_TYPE_NEXT_DAY_OPEN", "xx"])',
        externalAction:
          '@pick(["AD_CONVERT_TYPE_ACTIVE", "AD_CONVERT_TYPE_ACTIVE_REGISTER", "AD_CONVERT_TYPE_PAY", "AD_CONVERT_TYPE_GAME_ADDICTION", "xxx"])',
        campaignStat: {
          total: '@integer(0, 999)',
          status: {
            CAMPAIGN_STATUS_ENABLE: '@integer(0, 99)',
            AD_STATUS_DELIVERY_OK: '@integer(0, 99)',
            CREATIVE_STATUS_DELIVERY_OK: '@integer(0, 99)'
          }
        },
        adStat: {
          total: '@integer(0, 999)',
          status: {
            CAMPAIGN_STATUS_ENABLE: '@integer(0, 99)',
            AD_STATUS_DELIVERY_OK: '@integer(0, 99)',
            CREATIVE_STATUS_DELIVERY_OK: '@integer(0, 99)'
          }
        },
        creativeStat: {
          total: '@integer(0, 999)',
          status: {
            CAMPAIGN_STATUS_ENABLE: '@integer(0, 99)',
            AD_STATUS_DELIVERY_OK: '@integer(0, 99)',
            CREATIVE_STATUS_DELIVERY_OK: '@integer(0, 99)'
          }
        },
        hasConfig: "@pick(['YES', 'NO', 'DEFAULT'])",
        // 累计指标
        totalCost: '@float(1000, 999999, 0,3)',
        totalActive: '@integer(100, 9999)',
        totalUnitPrice: '@float(0, 9, 0,4)',
        totalAttributionNextDayOpenCntRate: '@float(0, 0.8, 0,4)',
        totalShow: '@integer(100, 9999999)',
        totalClick: '@integer(100, 9999999)',
        totalDownloadStart: '@integer(100, 9999)',
        totalDownloadFinish: '@integer(100, 9999)',
        totalInstallFinish: '@integer(100, 9999)',
        totalInstallFinishRate: '@float(0, 0.9, 0,4)',
        totalCtr: '@float(0, 0.9, 0,4)',
        totalEcpm: '@float(0, 9, 0,2)',
        totalCvr: '@float(0, 0.9, 0,4)',
        totalDataConvert: '@integer(100, 9999)',
        totalConvertCost: '@float(1, 20, 0,4)',
        totalEstimateRoi: '@float(0, 3, 0,4)',
        // 当日指标
        cost: '@float(1000, 999999, 0,3)',
        costList: ['08:16.4', '09:3.31', '10:3.78', '11:0.98', '12:0.0', '13:0.0', '14:0.0'],
        active: '@integer(100, 9999)',
        unitPrice: '@float(0, 9, 0,4)',
        attributionNextDayOpenCntRate: '@float(0, 0.9, 0,4)',
        show: '@integer(100, 999999)',
        click: '@integer(100, 999999)',
        downloadStart: '@integer(100, 9999)',
        downloadFinish: '@integer(100, 9999)',
        installFinish: '@integer(100, 9999)',
        installFinishRate: '@float(0, 0.9, 0,4)',
        clickInstall: '@integer(100, 9999)',
        ctr: '@float(0, 0.9, 0,4)',
        ecpm: '@float(0, 9, 0,2)',
        cvr: '@float(0, 0.9, 0,4)',
        data_convert: '@integer(100, 9999)',
        bid: '@float(1, 2.999, 0,3)',
        convert_cost: '@float(1, 3, 0,4)',
        events: event.lists,
        estimateRevenue: '@float(0, 9999999, 0,3)',
        estimateRoi: '@float(0, 2, 0,4)',
        // startTime: "@integer(1577836800000,1609372800000)",
        startTime: '@integer(1603000000000,1606810658314)',
        createTime: `@integer(${Date.now() - 7 * (24 * 60 * 60 * 1000)},${Date.now()})`,
        status:
          "@pick(['AD_STATUS_DONE','AD_STATUS_ENABLE','AD_STATUS_BUDGET_EXCEED','AD_STATUS_BALANCE_EXCEED', 'AD_STATUS_DELIVERY_OK'])",
        // status: '@pick(["CREATIVE_STATUS_ENABLE", "CREATIVE_STATUS_DELIVERY_OK", "CREATIVE_STATUS_NOT_START", "CREATIVE_STATUS_NO_SCHEDULE", "CREATIVE_STATUS_DISABLE", "CREATIVE_STATUS_CAMPAIGN_DISABLE", "CREATIVE_STATUS_CAMPAIGN_EXCEED", "CREATIVE_STATUS_AUDIT", "CREATIVE_STATUS_REAUDIT", "CREATIVE_STATUS_DELETE", "CREATIVE_STATUS_DONE", "CREATIVE_STATUS_AD_DISABLE", "CREATIVE_STATUS_AUDIT_DENY", "CREATIVE_STATUS_BALANCE_EXCEED", "CREATIVE_STATUS_BUDGET_EXCEED", "CREATIVE_STATUS_DATA_ERROR", "CREATIVE_STATUS_PRE_ONLINE", "CREATIVE_STATUS_AD_AUDIT", "CREATIVE_STATUS_AD_REAUDIT", "CREATIVE_STATUS_AD_AUDIT_DENY", "CREATIVE_STATUS_ALL", "CREATIVE_STATUS_NOT_DELETE", "CREATIVE_STATUS_ADVERTISER_BUDGET_EXCEED"])',
        lastUpdateTime: '@integer(1606760000000,1606794513489)'
      }
    ],
    summary: {
      cost: '@float(1000, 999999, 0,3)',
      active: '@integer(100, 9999)',
      unitPrice: '@float(0, 9, 0,3)',
      attributionNextDayOpenCntRate: '@float(0, 1, 2,4)',
      show: '@integer(100, 99999)',
      click: '@integer(100, 9999)',
      downloadFinish: '@integer(100, 9999)',
      ctr: '@float(0, 0.9, 0,4)',
      ecpm: '@float(0, 9, 0,2)',
      cvr: '@float(0, 0.9, 0,4)',
      convert_cost: '@float(1, 20, 0,4)',
      totalCost: '@float(1000, 999999, 0,3)',
      totalActive: '@integer(100, 9999)',
      totalUnitPrice: '@float(0, 9, 0,4)',
      totalAttributionNextDayOpenCntRate: '@float(0, 0.8, 0,4)',
      totalShow: '@integer(100, 99999)',
      totalClick: '@integer(100, 9999)',
      totalDownloadStart: '@integer(100, 9999)',
      totalDownloadFinish: '@integer(100, 9999)',
      totalInstallFinish: '@integer(100, 9999)',
      totalCtr: '@float(0, 0.9, 0,4)',
      totalEcpm: '@float(0, 9, 0,2)',
      totalCvr: '@float(0, 0.9, 0,4)',
      events: event.summary,
      estimateRevenue: '@float(0, 9999999, 0,3)',
      estimateRoi: '@float(0, 2, 0,4)'
    },
    min: {
      cost: 1000.1,
      active: 100,
      attributionNextDayOpenCntRate: 0,
      unitPrice: 0,
      convert_cost: 0,
      events: event.min,
      estimateRevenue: 0,
      estimateRoi: 0.1234
    },
    max: {
      cost: 999999.123,
      active: 9999,
      attributionNextDayOpenCntRate: 0.9,
      unitPrice: 9,
      convert_cost: 20,
      events: event.max,
      estimateRevenue: 999999.9,
      estimateRoi: 0.8234
    },
    lastDataUpdateTime: '@now()'
  }
}
