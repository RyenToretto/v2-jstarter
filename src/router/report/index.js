import promotion from './promotion'
import income from './income'
import material from './material'
import reportModuleRoutes from '@/modules/report/_router'
export default [
  {
    path: '/report',
    meta: {
      isHeaderTab: true
    },
    component: () => import(/* webpackChunkName: "report" */ '@/views/report/index.vue'),
    children: [
      ...reportModuleRoutes,
      // 以下页面后续要拆分到/modules/report目录
      ...promotion,
      ...income,
      ...material
    ]
  }
]
