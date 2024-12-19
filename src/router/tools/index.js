import dataEntry from '@/modules/tools/dataEntry/_router'
import elb from '@/modules/tools/elb/_router'
import userFeedback from '@/modules/tools/userFeedback/_router'
import costEnter from '@/modules/enter/cost/_router'
import events from '@/modules/tools/events/_router'
import xhUploader from '@/modules/tools/xhUploader/_router'

export default [
  {
    path: '/tools',
    meta: {
      isHeaderTab: true
    },
    // redirect: '/tools/tracking-url',
    component: () => import(/* webpackChunkName: "tools" */ '@/views/tools/index.vue'),
    children: [
      ...costEnter,
      ...elb,
      ...userFeedback,
      ...dataEntry,
      ...events,
      ...xhUploader,
      {
        path: 'tracking-url',
        component: () => import(/* webpackChunkName: "tools" */ '@/views/tools/trackingUrl.vue'),
        meta: {
          title: '点击监测链接',
          permission: 'TOOL_TRACKING-URL',
          onlyInternal: true
        }
      },
      {
        path: 'testClick',
        component: () => import(/* webpackChunkName: "tools" */ '@/views/tools/testClick.vue'),
        meta: {
          title: '渠道点击联调',
          permission: 'TOOL_TEST-CLICK',
          onlyInternal: true
        }
      },
      {
        path: 'enterRevenue',
        component: () => import(/* webpackChunkName: "tools" */ '@/views/tools/enterRevenue.vue'),
        meta: {
          title: '收入数据',
          permission: 'TOOL_ENTER-REVENUE'
        }
      },
      {
        path: 'testDataClear',
        component: () => import(/* webpackChunkName: "tools" */ '@/views/tools/testDataClear.vue'),
        meta: {
          title: '测试数据清理',
          permission: 'TOOL_CLEAN_CACHE',
          onlyInternal: true
        }
      },
      {
        path: 'turn/test',
        component: () => import(/* webpackChunkName: "tools" */ '@/views/tools/turnTest.vue'),
        meta: {
          title: '转化联调',
          permission: 'TOOL_TURN-TEST',
          onlyInternal: true
        }
      },
      // 事件日志
      {
        path: 'events/log',
        component: () => import(/* webpackChunkName: "tools" */ '@/views/tools/event/log.vue'),
        meta: {
          title: '实时日志',
          permission: 'EVENT_LOG_VIEW'
        }
      },
      {
        path: 'events/distribution',
        component: () =>
          import(/* webpackChunkName: "tools" */ '@/views/tools/event/distribution.vue'),
        meta: {
          title: '事件分布',
          permission: 'EVENT_LOG_VIEW'
        }
      }
    ]
  }
]
