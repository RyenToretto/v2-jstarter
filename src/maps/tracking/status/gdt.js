/**
 * 腾讯广告
 * https://developers.e.qq.com/docs/reference/enum
 *  campaign: 对应 -> 客户设置的状态
 *  ad: 对应 -> 广告状态
 *  creative: 对应 -> 客户设置的状态
 */
export default {
  campaign: {
    AD_STATUS_NORMAL: {
      type: 'success',
      name: '有效'
    },
    AD_STATUS_SUSPEND: {
      type: 'warning',
      name: '暂停'
    }
  },
  ad: {
    STATUS_UNKNOWN: {
      type: 'warning',
      name: '未知状态'
    },
    STATUS_PENDING: {
      type: 'warning',
      name: '审核中'
    },
    STATUS_DENIED: {
      type: 'warning',
      name: '审核不通过'
    },
    STATUS_FROZEN: {
      type: 'danger',
      name: '冻结'
    },
    STATUS_SUSPEND: {
      type: 'warning',
      name: '暂停中'
    },
    STATUS_READY: {
      type: 'warning',
      name: '未到投放时间'
    },
    STATUS_ACTIVE: {
      type: 'success',
      name: '投放中'
    },
    STATUS_STOP: {
      type: 'normal',
      name: '投放结束'
    },
    STATUS_PREPARE: {
      type: 'warning',
      name: '准备中'
    },
    STATUS_DELETED: {
      type: 'normal',
      name: '已删除'
    },
    STATUS_ACTIVE_ACCOUNT_FROZEN: {
      type: 'warning',
      name: '广告被暂停（账户资金被冻结）'
    },
    STATUS_ACTIVE_ACCOUNT_EMPTY: {
      type: 'warning',
      name: '广告被暂停（账户余额不足）'
    },
    STATUS_ACTIVE_ACCOUNT_LIMIT: {
      type: 'warning',
      name: '广告被暂停（账户达日限额）'
    },
    STATUS_ACTIVE_CAMPAIGN_LIMIT: {
      type: 'warning',
      name: '广告被暂停（推广计划达日限额）'
    },
    STATUS_ACTIVE_CAMPAIGN_SUSPEND: {
      type: 'warning',
      name: '广告被暂停（推广计划暂停）'
    },
    STATUS_ACTIVE_AD_LIMIT: {
      type: 'warning',
      name: '广告被暂停（广告达日限额）'
    },
    STATUS_PART_READY: {
      type: 'warning',
      name: '部分待投放'
    },
    STATUS_PART_ACTIVE: {
      type: 'warning',
      name: '部分投放中'
    }
  },
  creative: {
    AD_STATUS_NORMAL: {
      type: 'success',
      name: '有效'
    },
    AD_STATUS_SUSPEND: {
      type: 'warning',
      name: '暂停'
    }
  }
}
