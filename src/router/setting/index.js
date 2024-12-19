import app from './app'
import appSeries from '@/modules/setting/appSeries/_router'
import tenantConfig from '@/modules/setting/tenantConfig/_router'
import promotion from './promotion'
import xhSdk from '@/modules/setting/xhSdk/_router'
import tier from '@/modules/setting/tier/_router'
import abTest from '@/modules/setting/abTest/_router'

export default [
  {
    path: '/setting',
    meta: {
      isHeaderTab: true
    },
    // redirect: '/setting/index',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/index.vue'),
    children: [
      ...app,
      ...appSeries,
      ...tenantConfig,
      ...promotion,
      // --- modules
      ...xhSdk,
      ...tier,
      ...abTest
    ]
  }
]
