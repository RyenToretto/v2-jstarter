import wzTag from '@/modules/wz/wzTag/_router.js'
import ecpm from '@/modules/wz/ecpm/_router'
import merchant from '@/modules/wz/merchant/_router'
import strategy from '@/modules/wz/strategy/_router'
import trafficReport from '@/modules/wz/trafficReport/_router'
import report from '@/modules/wz/report/_router'
import taskApp from '@/modules/task/app/_router'
export default [
  {
    path: '/withdrawal',
    name: 'reportWithdrawal',
    meta: {
      isHeaderTab: true,
      permission: 'WZ_DISPLAY_DATA'
    },
    component: () => import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/index.vue'),
    children: [
      ...ecpm,
      ...wzTag,
      ...merchant,
      ...strategy,
      ...trafficReport,
      ...report,
      ...taskApp,
      {
        path: 'audit',
        name: 'WzWithdrawalAudit',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/WzWithdrawalAudit.vue'),
        meta: {
          title: '提现审核',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      // ==维度报表==
      {
        path: 'v2/newUsers',
        name: 'WithdrawalV2NewUsers',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/appForNewUsers.vue'),
        meta: {
          title: 'APP维度(新增用户)',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/dau',
        name: 'WithdrawalV2Dau',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/appForDAU.vue'),
        meta: {
          title: 'APP维度(DAU)',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/model/newUsers',
        name: 'WithdrawalV2ModelNewUsers',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/modelNewUsers.vue'),
        meta: {
          title: '机型维度(新增用户)',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/model/dau',
        name: 'WithdrawalV2ModelDau',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/modelDau.vue'),
        meta: {
          title: '机型维度(DAU)',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/ip',
        name: 'WithdrawalV2Ip',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/ip.vue'),
        meta: {
          title: 'IP维度',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/user',
        name: 'WithdrawalV2User',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/user.vue'),
        meta: {
          title: '用户维度',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/unionId',
        name: 'WithdrawalV2UnionId',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/unionId.vue'),
        meta: {
          title: 'UnionID维度',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/aid',
        name: 'WithdrawalV2Aid',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/aid.vue'),
        meta: {
          title: 'Aid维度',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'v2/vd',
        name: 'WithdrawalV2Vd',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/v2/vd.vue'),
        meta: {
          title: 'VD维度',
          permission: 'REPORT_PROMOTION_TIXIAN_VIEW',
          onlyInternal: true
        }
      },
      {
        path: 'black/list',
        name: 'BlackList',
        component: () =>
          import(/* webpackChunkName: "withdrawal" */ '@/views/withdrawal/BlackList.vue'),
        meta: {
          title: '用户黑名单',
          permission: 'REPORT_PROMOTION_TIXIAN_USER_CONFIG',
          onlyInternal: true
        }
      }
    ]
  }
]
