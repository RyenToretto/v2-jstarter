import company from '@/modules/company/_router'
import generalConfig from '@/modules/system/generalConfig/_router'
import taskTemplate from '@/modules/task/template/_router'
import organization from '@/modules/system/organization/_router'
import config from '@/modules/system/config/_router'
import department from '@/modules/system/department/_router'
import dramaAuthConfig from '@/modules/system/dramaAuthConfig/_router'
import member from '@/modules/system/member/_router'
export default [
  {
    path: '/system',
    meta: {
      isHeaderTab: true
    },
    // redirect: '/system/log',
    component: () => import(/* webpackChunkName: "system" */ '@/views/system/index.vue'),
    children: [
      ...generalConfig,
      ...company,
      ...taskTemplate,
      ...organization,
      ...config,
      ...department,
      ...dramaAuthConfig,
      ...member,
      {
        path: 'account_manage',
        component: () =>
          import(/* webpackChunkName: "account_manage" */ '@/views/system/account-manage.vue'),
        meta: {
          title: '账号管理',
          permission: 'SYS_ACCOUNT-MANAGE_VIEW'
        }
      },
      {
        path: 'data_dictionary',
        component: () =>
          import(/* webpackChunkName: "system" */ '@/views/system/data-dictionary.vue'),
        meta: {
          title: '数据字典',
          permission: 'SYS_DATA_DICTIONARY_CONFIG'
        }
      },
      {
        path: 'log',
        component: () => import(/* webpackChunkName: "system" */ '@/views/system/log.vue'),
        meta: {
          title: '操作记录',
          permission: 'SYS_LOG_VIEW'
        }
      },
      {
        path: 'businessMonitor',
        component: () =>
          import(/* webpackChunkName: "system" */ '@/views/businessMonitor/list.vue'),
        meta: {
          title: '监控报警',
          // TODO 监控权限KEY待替换
          permission: 'REPORT_PROMOTION_APP_VIEW'
        }
      }
    ]
  }
]
