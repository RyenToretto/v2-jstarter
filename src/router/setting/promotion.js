import promotionConfig from '@/modules/setting/promotionConfig/_router'
import signConfig from '@/modules/setting/signConfig/_router'
import firebaseConfig from '@/modules/setting/firebaseConfig/_router'
import costPulling from '@/modules/setting/costPulling/_router'
import huaweiCostConfig from '@/modules/setting/huaweiCostConfig/_router'
import smsConfig from '@/modules/setting/smsConfig/_router'
export default [
  ...promotionConfig,
  ...signConfig,
  ...firebaseConfig,
  ...costPulling,
  ...huaweiCostConfig,
  ...smsConfig,
  {
    path: 'source',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/system/source.vue'),
    meta: {
      title: '投放渠道管理',
      permission: 'SYS_SOURCE_VIEW'
    }
  },
  {
    path: 'rebates',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/rebates.vue'),
    meta: {
      title: '返点配置',
      permission: 'SETTING_REBATE_VIEW'
    }
  },
  {
    path: 'unionGroup',
    component: () =>
      import(/* webpackChunkName: "setting" */ '@/views/setting/unionGroup/index.vue'),
    meta: {
      title: '媒体包配置',
      permission: 'REPORT_PROMOTION_FLOW-PACKAGE'
    }
  }
]
