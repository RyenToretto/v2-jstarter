export default [
  {
    path: 'promotion/app',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/promotion/product.vue'),
    meta: {
      title: '投放产品',
      permission: 'REPORT_PROMOTION_APP_VIEW'
    }
  },
  {
    path: 'promotion/advertiser',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/promotion/advertiser.vue'),
    meta: {
      title: '投放账号',
      permission: 'REPORT_PROMOTION_ADVERTISER_VIEW'
    }
  },
  {
    path: 'promotion/optimizer',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/promotion/optimizer.vue'),
    meta: {
      title: '优化师',
      permission: 'REPORT_PROMOTION_ADVERTISER_VIEW'
    }
  },
  {
    path: 'promotion/:dim(campaign)',
    component: () => import(/* webpackChunkName: "report" */ '@/views/campaign.vue'),
    meta: {
      title: '投放数据',
      permission: 'REPORT_PROMOTION_CAMPAIGN_VIEW'
    }
  },
  {
    path: 'promotion/:dim(ad)',
    component: () => import(/* webpackChunkName: "report" */ '@/views/campaign.vue'),
    meta: {
      title: '投放数据',
      permission: 'REPORT_PROMOTION_AD_VIEW'
    }
  },
  {
    path: 'promotion/:dim(creative)',
    component: () => import(/* webpackChunkName: "report" */ '@/views/campaign.vue'),
    meta: {
      title: '投放数据',
      permission: 'REPORT_PROMOTION_CREATIVE_VIEW'
    }
  },
  {
    path: 'promotion/material',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/promotion/materialReport.vue'),
    meta: {
      title: '广告素材',
      permission: 'REPORT_PROMOTION_METERIAL_VIEW'
    }
  },
  {
    path: 'promotion/self-traffic',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/promotion/selfTraffic.vue'),
    meta: {
      title: '带量媒体',
      permission: 'REPORT_PROMOTION_MEDIA_VIEW'
    }
  },
  {
    path: 'promotion/unionSite',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/promotion/unionSite.vue'),
    meta: {
      title: '广告位',
      permission: 'REPORT_PROMOTION_UNION-SITE_VIEW'
    }
  },
  {
    path: 'promotion/monitoring',
    component: () =>
      import(/* webpackChunkName: "report" */ '@/views/report/promotion/monitoring.vue'),
    meta: {
      title: '数据监控',
      permission: 'MONITORING_VIEW'
    }
  }
]
