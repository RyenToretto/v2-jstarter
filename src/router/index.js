import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage from '@/views/ErrorPage.vue'
import noPermissionView from '@/views/noPermission.vue'
import { analysis } from '@/utils'
import NProgress from 'nprogress'
import { Message } from 'element-ui'
// const { Message } = ELEMENT
import store from '@/store'
import ChangePwd from '@/views/changePwd.vue'
import accountInfo from '@/views/accountInfo.vue'
import biddingwin from '@/modules/biddingwin/_router'
// import promotion from './promotion'
import report from './report'
import tools from './tools'
import setting from './setting'
import subscribe from './subscribe'
import easy from '@/modules/easy/_router'
import juwin from '@/modules/juwin/_router'
import recharge from '@/modules/recharge/_router'
import system from './system'
import withdrawal from './wz'
import finance from './finance'
import mediation from './mediation'
import offline from '@/modules/offline/_router'
import dahanghai from '@/modules/dahanghai/_router'
import other from '@/modules/other/_router'
import business from '@/modules/business/_router'

Vue.use(VueRouter)

export const permissionRoutes = [
  // ...promotion,
  ...biddingwin,
  ...report,
  ...mediation,
  ...withdrawal,
  ...tools,
  ...setting,
  ...subscribe,
  ...easy,
  ...juwin,
  ...recharge,
  ...system,
  ...finance,
  ...offline,
  ...business,
  ...dahanghai,
  ...other
  /*
  {
    path: '/app/placement',
    component: () => import(/!* webpackChunkName: "placement" *!/ '../views/app/placement.vue'),
    meta: {
      title: '广告位管理',
      permission: 'APP_PLACEMENT_VIEW'
    }
  },
  {
    path: '/app/placement_type',
    component: () => import(/!* webpackChunkName: "placement" *!/ '../views/app/placement-type.vue'),
    meta: {
      title: '广告位类型管理',
      permission: 'APP_PLACEMENT-TYPE_VIEW'
    }
  },
  {
    path: '/app/channel_placement_type',
    component: () => import(/!* webpackChunkName: "channel_placement" *!/ '../views/app/channel-placement-type.vue'),
    meta: {
      title: '渠道广告位类型管理',
      permission: 'APP_CHANNEL-PLACEMENT-TYPE_VIEW'
    }
  },
  {
    path: '/channel/app',
    component: () => import(/!* webpackChunkName: "channel_app" *!/ '../views/channel/channel-app-manage.vue'),
    meta: {
      title: '渠道应用管理',
      permission: 'CHANNEL_APP_VIEW'
    }
  },
  {
    path: '/channel/placement',
    component: () => import(/!* webpackChunkName: "channel_placement" *!/ '../views/channel/channel-placement-manage.vue'),
    meta: {
      title: '渠道广告位管理',
      permission: 'CHANNEL_PLACEMENT_VIEW'
    }
  },
  {
    path: '/channel/placement_config',
    component: () => import(/!* webpackChunkName: "channel_placement_config" *!/ '../views/channel/channel-placement-config.vue'),
    meta: {
      title: '渠道广告位配置管理',
      permission: 'CHANNEL_PLACEMENT_CONFIG_VIEW'
    }
  },
  {
    path: '/channel/placement_mediation',
    component: () => import(/!* webpackChunkName: "channel_placement_mediation" *!/ '../views/channel/channel-placement-mediation.vue'),
    meta: {
      title: '渠道广告位Mediation管理',
      permission: 'CHANNEL_PLACEMENT_MEDIATION_VIEW'
    }
  },
  */
]
const routes = [
  {
    path: '*',
    component: ErrorPage,
    meta: {
      // hideHeader: true,
      hideFooter: true
    }
  },
  {
    path: '/no-permission',
    component: noPermissionView,
    meta: {
      // hideHeader: true,
      hideFooter: true
    }
  },
  // {
  //   path: '/'
  //   // redirect: '/report'
  // },
  {
    path: '/account/changePwd',
    component: ChangePwd
  },
  {
    path: '/account/info',
    component: accountInfo
  },
  ...permissionRoutes
]
// export function getPermissionRoute () {
//   const permissions = Vue.prototype.$PERMISSION
//   return permissionRoutes.filter(item => {
//     let matched = true
//     const permissionKey = item?.meta?.permission
//     if (permissionKey) {
//       matched = permissions.includes(permissionKey)
//     }
//     return matched
//   })
// }
/*
 * 扁平化嵌套路由
 * @param {Array} data 路由数组
 */
// function flattenRoutes () {
//   const newRoutes = []
//   function fillPath (data = [], prePath = '') {
//     data.forEach(v => {
//       if (!v.path.startsWith('/')) {
//         v.path = prePath + v.path
//       }
//       if (v.children && getRealType(v.children) === 'array') {
//         fillPath(v.children, `${v.path}/`)
//         // delete v.children
//       }
//       newRoutes.push(v)
//     })
//     return data
//   }
//   fillPath(permissionRoutes)
//   return newRoutes
// }
store.commit('clearHiddenPath')
const useRoutesFilter = (routeList, prePath = '') => {
  return routeList.reduce((newRoutes, eachRoute) => {
    const ignoreType = sessionStorage.getItem('oversea') === 'true' ? 'onlyInternal' : 'onlyOversea'
    if (eachRoute.meta && eachRoute.meta[ignoreType] && store.state.pathHideList) {
      // 忽略掉【仅国内 / 仅国外】的
      let _path = /^\/.*/.test(eachRoute.path) ? eachRoute.path : `${prePath}/${eachRoute.path}`
      store.commit('addHiddenPath', _path)
      // return newRoutes // 过滤菜单和路由
      return [...newRoutes, eachRoute] // 只过滤菜单，不过滤路由
    } else {
      if (eachRoute.children && eachRoute.children.length) {
        eachRoute.children = useRoutesFilter(eachRoute.children, eachRoute.path)
      }
      return [...newRoutes, eachRoute]
    }
  }, [])
}
/**
 * 判断路由权限
 */
function routePermissionMatch(route) {
  const yourPermissions = store.state.permissions
  const matchRoutes = route.matched || []
  // 当前路由所需权限KEY，包含父级路由的权限KEY
  const permissionKeys = matchRoutes.map((v) => v?.meta.permission).filter(Boolean)
  if (permissionKeys.length === 0) {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    let invalidKey = ''
    permissionKeys.every((v) => {
      const validAble = yourPermissions.includes(v)
      if (!validAble) {
        invalidKey = v
      }
      return validAble
    })
      ? resolve()
      : reject(invalidKey)
  })
}
const router = new VueRouter({
  routes: useRoutesFilter(routes)
})
router.beforeEach((to, from, next) => {
  // 上报页面浏览
  analysis([to.fullPath], 'pageView')
  routePermissionMatch(to)
    .then(() => {
      NProgress.start()
      next()
    })
    .catch((invalidKey) => {
      const keyBase64 = window.btoa(invalidKey)
      next({
        path: `/no-permission?key=${keyBase64}&path=${to.path}`,
        replace: true
      })
    })
    .finally(() => {
      window.scrollTo(0, 0)
    })
})
router.afterEach((to, from) => {
  // 根路径默认触发一级菜单的第一个
  if (to.path === '/') {
    const topMenus = document.querySelectorAll('.base-header .menus>.link')
    if (topMenus.length) {
      topMenus[0].click()
    }
  }
  NProgress.done()
})
router.onError((err) => {
  console.log('routerError:', err) // eslint-disable-line no-console
  if (err.name === 'ChunkLoadError') {
    Message({
      type: 'error',
      // message: `资源加载异常：${err.request}`
      message: '资源加载异常,请刷新重试'
    })
  }
})
// export { promotion, report }
export default router
