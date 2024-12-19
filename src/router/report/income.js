export default [
  {
    path: 'income/summary',
    component: () => import(/* webpackChunkName: "report" */ '@/views/report/income/summary.vue'),
    meta: {
      title: '产品收入',
      permission: 'REPORT_EARNING_VIEW'
    }
  },
  {
    path: 'income/roi',
    component: () => import(/* webpackChunkName: "report" */ '@/views/report/income/roi.vue'),
    meta: {
      title: '产品ROI',
      permission: 'PRODUCT_ROI'
    }
  },
  {
    path: 'income/country',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/income/revenueForCountry.vue'),
    meta: {
      title: '分国家收入',
      // TODO 权限KEY待定
      permission: 'REPORT_EARNING_VIEW'
    }
  },
  {
    path: 'income/compensation',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/modules/report/income/compensation/csj.vue'),
    meta: {
      title: '赔付数据(巨量)',
      // TODO 权限KEY待定，临时用产品收入权限代替
      permission: 'REPORT_EARNING_VIEW'
    }
  },
  {
    path: 'roi/advance',
    component: () => import(/* webpackChunkName: "report" */ '@/views/report/roi/advance.vue'),
    meta: {
      title: '多维度分析',
      permission: 'REPORT_ROI_VIEW'
    }
  }
]
