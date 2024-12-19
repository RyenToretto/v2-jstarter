import mediationModuleRoutes from '@/modules/mediation/_router'
export default [
  {
    path: '/mediation',
    meta: {
      isHeaderTab: true
    },
    component: () => import(/* webpackChunkName: "Mediation" */ '@/modules/mediation/index.vue'),
    children: [...mediationModuleRoutes]
  }
]
