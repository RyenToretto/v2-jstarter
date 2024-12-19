export default [
  {
    path: 'material/overview',
    component: () => import(/* webpackChunkName: "material" */ '@/views/materials/overview.vue'),
    meta: {
      title: '概览',
      permission: 'MATERIAL_OVERVIEW_VIEW'
    }
  },
  {
    path: 'material/rank',
    component: () => import(/* webpackChunkName: "material" */ '@/views/materials/top.vue'),
    meta: {
      title: '国内排行',
      permission: 'MATERIAL_RANK_VIEW'
    }
  },
  {
    path: 'material/list',
    component: () => import(/* webpackChunkName: "material" */ '@/views/materials/list.vue'),
    meta: {
      title: '国内素材',
      permission: 'MATERIAL_LIST_VIEW'
    }
  },
  {
    path: 'material/overseaRank',
    component: () => import(/* webpackChunkName: "material" */ '@/views/materials/overseaTop.vue'),
    meta: {
      title: '海外排行',
      permission: 'MATERIAL_OVERSEA-RANK_VIEW'
    }
  },
  {
    path: 'material/overseaList',
    component: () => import(/* webpackChunkName: "material" */ '@/views/materials/overseaList.vue'),
    meta: {
      title: '海外素材',
      permission: 'MATERIAL_OVERSEA-LIST_VIEW'
    }
  }
]
