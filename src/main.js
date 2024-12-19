import Vue from 'vue'
import { createApp, h } from 'vue-demi'
import md5 from 'md5'
import App from './App.vue'
import ErrorPage from './views/ErrorPage.vue'
import router from './router'
import store from './store'
import '@/plugins/axios'
import dayjs from '@/plugins/dayjs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/modules.less'
import MAPS from '@/maps'
import qs from 'qs'
import * as utils from '@/utils'
import appendFilters from '@/plugins/globalFilters/appendFilters'
import globalFilters from '@/plugins/globalFilters'
import '@/components/globalComponents' // === 全局组件
import '@/directive'
// === 调用插件
ElementUI.Dialog.props.closeOnClickModal.default = false
ElementUI.TableColumn.props.sortOrders.default = () => ['descending', 'ascending', null]
Vue.use(ElementUI)
Vue.use(dayjs)
Vue.use(globalFilters)

// === 注入实例
Vue.prototype.$CDN = utils.doEnv.VITE_APP_CDN
Vue.prototype.$MAPS = MAPS
Vue.prototype.$utils = appendFilters(utils)
Vue.prototype.$md5 = md5
Vue.prototype.$qs = qs
Vue.prototype.$UI_HEADER_HEIGHT = 56

// === 插入全局变量
window.UUAP = utils.doEnv.VITE_APP_UUAP_PROD
// 一天的毫秒数
window.MS_PER_DAY = 24 * 60 * 60 * 1000
Vue.config.productionTip = false

function render(instance) {
  createApp({
    router,
    store,
    render: () => h(instance)
  }).mount('#app')
}

function bootstrap() {
  store
    .dispatch('getUserInfo')
    .then((res) => {
      const PERMISSION = res.permissions
      Vue.prototype.$ACCOUNT_ID = res.id
      Vue.prototype.$USER_NAME = res.name
      Vue.prototype.$NICK_NAME = res.nickName
      Vue.prototype.$EMAIL = res.mail
      Vue.prototype.$PHONE = res.phone
      Vue.prototype.$PERMISSION = PERMISSION
      /**
       * 是否拥有某个或某些权限
       * @param {String | RegExp} key 权限key或正则
       * @returns {Boolean} 是否有权限
       */
      const checkPermission = (key) => {
        const isRegExpKey = key instanceof RegExp
        if (isRegExpKey) {
          return PERMISSION.some((v) => key.test(v))
        }
        return PERMISSION.includes(key)
      }
      Vue.prototype.$HAS_PERMISSION = checkPermission
      /**
       * 判断某个APP是否拥有某个权限
       * @param {String} key 权限KEY
       * @param {String} pkg 包名
       * @returns 返回该包名所属企业是否拥有某个权限KEY
       */
      Vue.prototype.$HAS_PERMISSION_FOR_APP = (key, pkg) => {
        // console.count('$HAS_PERMISSION_FOR_APP')
        const companyList = store.state?.company?.list || []
        const company = companyList.find((v) => {
          const apps = v.apps || []
          return apps.includes(pkg)
        })
        if (!company) {
          return false
        }
        return (company.permissions || []).includes(key)
      }
      // 某些角色是否拥有权限
      //   // 废弃
      // Vue.prototype.$ROLE_PERMISSION = (...role) => {
      //   const roles = role
      //   return roles.includes(res.role)
      // }
      // 排除某些角色
      //   // 废弃
      // Vue.prototype.$ROLE_PERMISSION_EXCLUDE = (...role) => {
      //   const roles = role
      //   return !roles.includes(res.role)
      // }
      store.commit('setAllRoutes', router.getRoutes())
      const pList = [
        store.dispatch('apps/getAllApps'),
        store.dispatch('source/getAllSource'),
        // store.dispatch('country/GET_COUNTRY')
        store.dispatch('dictionary/getDictionary')
      ]
      if (checkPermission('SYS_APP_VIEW')) {
        pList.push(store.dispatch('sAppSeries/getAllAppSeries'))
      }
      Promise.all(pList)
        .then(() => {
          render(App)
        })
        .catch(() => {
          render(ErrorPage)
        })
        .finally(() => {})
    })
    .catch((e) => {
      render(ErrorPage)
    })
}

// 真正的入口让vite去加 根据环境变量加载mock
const alwaysFalse = !window.MS_PER_DAY
if (alwaysFalse) {
  void bootstrap()
}
