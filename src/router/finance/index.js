import finance from '@/modules/finance/_router'
export default [
  {
    path: '/finance',
    component: () => import(/* webpackChunkName: "finance" */ '@/views/finance/index.vue'),
    meta: {
      isHeaderTab: true
    },
    children: [...finance]
  }
]
