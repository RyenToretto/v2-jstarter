import subscribeRoutes from '@/modules/subscribe/_router'

export default [
  {
    path: '/subscribe',
    name: 'SubscribeModule',
    meta: {
      isHeaderTab: true,
      permission: 'PAYMENT_DISPLAY_DATA'
    },
    component: () => import(/* webpackChunkName: "moneyModule" */ '@/views/subscribe/index.vue'),
    children: [...subscribeRoutes]
  }
]
