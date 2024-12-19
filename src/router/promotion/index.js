import promotionIndex from '@/views/promotion/index'
import promotionTitleViewer from '@/views/promotion/title/index'
export default [
  {
    path: '/promotion',
    component: promotionIndex,
    redirect: '/promotion/title/list',
    children: [
      {
        path: 'title',
        component: promotionTitleViewer,
        meta: {
          title: '文案管理'
        },
        children: [
          {
            name: 'titleList',
            path: 'list',
            component: () =>
              import(/* webpackChunkName: "promotion" */ '@/views/promotion/title/list.vue'),
            meta: {
              title: '标题库'
            }
          },
          {
            name: 'titlePackage',
            path: 'package',
            component: () =>
              import(/* webpackChunkName: "promotion" */ '@/views/promotion/title/package.vue'),
            meta: {
              title: '标题包'
              // icon: 'el-icon-folder'
            }
          },
          {
            name: 'titleCategory',
            path: 'category',
            component: () =>
              import(/* webpackChunkName: "promotion" */ '@/views/promotion/title/category.vue'),
            meta: {
              title: '标题分类'
            }
          }
        ]
      }
    ]
  }
]
