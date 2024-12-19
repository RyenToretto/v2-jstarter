/**
 * 巨量： https://ad.oceanengine.com/openapi/doc/index.html?id=528
 *  campaign: 对应 -> 广告组状态
 *  ad: 对应 -> 广告计划投放状态
 *  creative: 对应 -> 创意状态
 */
export default {
  campaign: {
    CAMPAIGN_STATUS_ENABLE: {
      name: '启用',
      type: 'success'
    },
    CAMPAIGN_STATUS_DISABLE: {
      name: '暂停',
      type: 'warning'
    },
    CAMPAIGN_STATUS_DELETE: {
      name: '删除',
      type: 'normal'
    },
    CAMPAIGN_STATUS_ALL: {
      name: '所有包含已删除',
      type: 'normal'
    },
    CAMPAIGN_STATUS_NOT_DELETE: {
      name: '所有不包含已删除',
      type: 'normal'
    },
    CAMPAIGN_STATUS_ADVERTISER_BUDGET_EXCEED: {
      name: '超出广告主日预算',
      type: 'warning'
    }
  },
  ad: {
    AD_STATUS_ENABLE: {
      name: '启用',
      type: 'success'
    },
    AD_STATUS_DISABLE: {
      name: '暂停', // 操作状态：暂停，投放状态：计划暂停
      type: 'warning'
    },
    AD_STATUS_DELIVERY_OK: {
      name: '投放中',
      type: 'success'
    },
    AD_STATUS_AUDIT: {
      name: '新建审核中',
      type: 'warning'
    },
    AD_STATUS_REAUDIT: {
      name: '修改审核中',
      type: 'warning'
    },
    AD_STATUS_DONE: {
      name: '已完成（投放达到结束时间）',
      type: 'warning'
    },
    AD_STATUS_CREATE: {
      name: '计划新建',
      type: 'warning'
    },
    AD_STATUS_AUDIT_DENY: {
      name: '审核不通过',
      type: 'danger'
    },
    AD_STATUS_BALANCE_EXCEED: {
      name: '账户余额不足',
      type: 'danger'
    },
    AD_STATUS_BUDGET_EXCEED: {
      name: '超出预算',
      type: 'danger'
    },
    AD_STATUS_NOT_START: {
      name: '未到达投放时间',
      type: 'warning'
    },
    AD_STATUS_NO_SCHEDULE: {
      name: '不在投放时段',
      type: 'warning'
    },
    AD_STATUS_CAMPAIGN_DISABLE: {
      name: '已被广告组暂停',
      type: 'danger'
    },
    AD_STATUS_CAMPAIGN_EXCEED: {
      name: '广告组超出预算',
      type: 'danger'
    },
    AD_STATUS_DELETE: {
      name: '已删除',
      type: 'normal'
    },
    AD_STATUS_ALL: {
      name: '所有包含已删除',
      type: 'normal'
    },
    AD_STATUS_NOT_DELETE: {
      name: '所有不包含已删除（状态过滤默认值）',
      type: 'normal'
    },
    AD_STATUS_ADVERTISER_BUDGET_EXCEED: {
      name: '超出广告主日预算',
      type: 'warning'
    }
  },
  creative: {
    CREATIVE_STATUS_ENABLE: {
      name: '启用',
      type: 'success'
    },
    // CREATIVE_STATUS_DISABLE: { name: '暂停', type: '' },
    // CREATIVE_STATUS_DELETE: { name: '删除', type: '' },
    CREATIVE_STATUS_DELIVERY_OK: {
      name: '投放中',
      type: 'success'
    },
    CREATIVE_STATUS_NOT_START: {
      name: '未到达投放时间',
      type: 'warning'
    },
    CREATIVE_STATUS_NO_SCHEDULE: {
      name: '不在投放时段',
      type: 'warning'
    },
    CREATIVE_STATUS_DISABLE: {
      name: '创意暂停',
      type: 'warning'
    },
    CREATIVE_STATUS_CAMPAIGN_DISABLE: {
      name: '已被广告组暂停',
      type: 'warning'
    },
    CREATIVE_STATUS_CAMPAIGN_EXCEED: {
      name: '广告组超出预算',
      type: 'warning'
    },
    CREATIVE_STATUS_AUDIT: {
      name: '新建审核中',
      type: 'warning'
    },
    CREATIVE_STATUS_REAUDIT: {
      name: '修改审核中',
      type: 'warning'
    },
    CREATIVE_STATUS_DELETE: {
      name: '已删除',
      type: 'normal'
    },
    CREATIVE_STATUS_DONE: {
      name: '已完成（投放达到结束时间）',
      type: 'warning'
    },
    CREATIVE_STATUS_AD_DISABLE: {
      name: '广告计划暂停',
      type: 'warning'
    },
    CREATIVE_STATUS_AUDIT_DENY: {
      name: '审核不通过',
      type: 'danger'
    },
    CREATIVE_STATUS_BALANCE_EXCEED: {
      name: '账户余额不足',
      type: 'danger'
    },
    CREATIVE_STATUS_BUDGET_EXCEED: {
      name: '超出预算',
      type: 'warning'
    },
    CREATIVE_STATUS_DATA_ERROR: {
      name: '数据错误',
      type: 'danger'
    },
    CREATIVE_STATUS_PRE_ONLINE: {
      name: '预上线',
      type: 'warning'
    },
    CREATIVE_STATUS_AD_AUDIT: {
      name: '广告计划新建审核中',
      type: 'warning'
    },
    CREATIVE_STATUS_AD_REAUDIT: {
      name: '广告计划修改审核中',
      type: 'warning'
    },
    CREATIVE_STATUS_AD_AUDIT_DENY: {
      name: '广告计划审核不通过',
      type: 'danger'
    },
    CREATIVE_STATUS_ALL: {
      name: '所有包含已删除',
      type: 'normal'
    },
    CREATIVE_STATUS_NOT_DELETE: {
      name: '所有不包含已删除',
      type: 'normal'
    },
    CREATIVE_STATUS_ADVERTISER_BUDGET_EXCEED: {
      name: '超出账户日预算',
      type: 'warning'
    }
  }
}
