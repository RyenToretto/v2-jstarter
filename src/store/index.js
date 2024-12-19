import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import apps from './module/apps'
import channelPlacement from './module/channelPlacement'
import dictionary from './module/dictionary'
import source from './module/source/index'
import tracking from './module/tracking'
import material from './module/material'
import mediationChannel from './module/mediationChannel'
import placement from './module/placement'
import rebates from './module/rebates'
import businessMonitor from './module/businessMonitor'
import unionGroup from './module/unionGroup'
import userApi from '@/api/user'
import { deepClone } from '@/utils'
import country from './module/country'
import promotion from './module/promotion'
import sCountry from './module/sCountry'
import sMessage from './module/sMessage'
import withdrawal from './module/withdrawal'
// modules
import sAppFolder from '@/modules/easy/_store/sAppFolder'
import sRemoteFolder from '@/modules/easy/_store/sRemoteFolder'
import sRemoteUser from '@/modules/easy/_store/sRemoteUser'
import sMediaUser from '@/modules/easy/_store/sMediaUser'
import sAccountGroup from '@/modules/easy/_store/sAccountGroup'
import sMediaTag from '@/modules/easy/_store/sMediaTag'
import sOriginMaterial from '@/modules/easy/_store/sOriginMaterial'
import sAppSeries from '@/modules/setting/appSeries/_store'
import sAppEvent from '@/modules/tools/events/appEvent/_store/sAppEvent'
import sElbBalancer from '@/modules/tools/elb/_store/sElbBalancer'
import sElbConfig from '@/modules/tools/elb/_store/sElbConfig'
import sElbListener from '@/modules/tools/elb/_store/sElbListener'
import sElbServiceGroup from '@/modules/tools/elb/_store/sElbServiceGroup'
import sDahanghaiDomo from '@/modules/dahanghai/channelAccount/_store/sDahanghaiDomo'
import company from '@/modules/company/_store'
import finance from '@/modules/finance/_store'
import sAli from '@/modules/subscribe/_store/sAli'
import sMerchant from '@/modules/subscribe/_store/sMerchant'
import sTrafficTag from '@/modules/wz/trafficReport/_store/sTrafficTag'
import sOrder from '@/modules/subscribe/_store/sOrder'
import generalConfig from '@/modules/system/generalConfig/_store'
import sCostEnter from '@/modules/enter/cost/_store'
import sTaskApp from '@/modules/task/app/_store'
import sTaskTemplate from '@/modules/task/template/_store'
import organization from '@/modules/system/organization/_store'
import member from '@/modules/system/member/_store'
import sDept from '@/modules/system/department/_store/sDept'
import sWzReport from '@/modules/wz/report/_store'
import biddingwin from '@/modules/biddingwin/_store'
import offline from '@/modules/offline/_store'
import sContentAudit from '@/modules/other/contentAudit/_store'
import sDataReport from '@/modules/other/dataReport/_store'
import wz from '@/modules/wz/_store'
import offlinePayment from '@/modules/subscribe/offlinePayment/_store'
import business from '@/modules/business/_store'
// import maps from '@/maps'
Vue.use(Vuex)
/**
 * 获取角色key
 * @param {Array} data roles对象
 * @returns {Array} 角色keys
 */
// function getRoles (data) {
//   return data.map(item => item.key)
// }
/**
 * 获取权限key
 * @param {Object} data account/info接口的返回值
 * @returns {Array} 权限keys
 */
function getPermissions(data) {
  // 权限合集（外层权限 + 公司级别权限 取并集去重）
  const permissions = []
  const isMaster = data.isMaster
  const companyArray = data.company || []
  // 外层权限KEY，基于账号而非公司的权限
  const outerPermission = data.permissions || []
  if (isMaster) {
    return outerPermission
  }
  permissions.push(...outerPermission)
  companyArray.forEach((item) => {
    permissions.push(...(item.permissions || []))
  })
  return [...new Set(permissions)]
}

// function rolesMapGenerator (data) {
//   data.forEach(v => {
//     const { key, name } = v
//     maps.role[key] = name
//   })
//   return data.map(item => item.key)
// }
export default new Vuex.Store({
  state,
  mutations: {
    SetUserInfo(state, payload) {
      const {
        id,
        name,
        nickName,
        mail,
        phone,
        isMaster,
        tenantId,
        tenantName,
        permissions,
        companyDepartmentId,
        companyDepartmentName
      } = payload
      state.userInfo = {
        id,
        name,
        nickName,
        mail,
        isMaster,
        tenantId,
        tenantName,
        phone,
        companyDepartmentId,
        companyDepartmentName
      }
      state.permissions = permissions
    },
    setPageSize(state, number) {
      state.pageSize = number
      localStorage.setItem('pageSize', number)
    },
    setPkg(state, pkg) {
      if (typeof pkg === 'string') {
        state.pkg = pkg
        localStorage.setItem('pkg', pkg)
      } else {
        localStorage.removeItem('pkg')
        state.pkg = ''
      }
    },
    setAllRoutes(state, payload) {
      const routes = payload || []
      const hasPermissionRoutes = routes.filter((v) => {
        return v?.meta.permission ? state.permissions.includes(v.meta.permission) : true
      })
      state.allRoutes = hasPermissionRoutes
    },
    UPDATE_OVERSEA(state, isOversea) {
      state.oversea = Boolean(isOversea)
      sessionStorage.setItem('oversea', isOversea)
      // 清除pkg
      localStorage.removeItem('pkg')
      localStorage.removeItem('WITHDRAWAL_PKG')
      // state.pkg = ''
    },
    addHiddenPath(state, path) {
      state.pathHideList.push(path)
    },
    clearHiddenPath(state) {
      state.pathHideList = []
    }
  },
  actions: {
    hasAuth({ state }, authKey) {
      if (!state.permissions || !state.permissions.length) {
        return false
      }

      const isRegExpKey = authKey instanceof RegExp
      if (isRegExpKey) {
        return state.permissions.some((v) => authKey.test(v))
      }
      return state.permissions.includes(authKey)
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        userApi
          .getUserInfo()
          .then((res) => {
            const data = deepClone(res)
            // 超管登录时用该权限覆盖各企业的权限
            if (data.isMaster) {
              data.company.forEach((item) => {
                item.permissions = data.permissions
              })
            }
            data.permissions = getPermissions(res)
            // rolesMapGenerator(res.roles)
            commit('SetUserInfo', data)
            commit('company/setList', data.company)
            resolve(data)
          })
          .catch((e) => {
            reject(e)
          })
      })
    }
  },
  modules: {
    source,
    apps,
    country,
    channelPlacement,
    dictionary,
    tracking,
    material,
    mediationChannel,
    placement,
    rebates,
    businessMonitor,
    business,
    unionGroup,
    promotion,
    sCountry,
    sMessage,
    withdrawal,
    // ==modules
    sAppFolder,
    sRemoteFolder,
    sRemoteUser,
    sMediaUser,
    sDept,
    sAccountGroup,
    sMediaTag,
    sOriginMaterial,
    sAppSeries,
    sAppEvent,
    sElbBalancer,
    sElbConfig,
    sElbListener,
    sElbServiceGroup,
    sDahanghaiDomo,
    company,
    finance,
    sAli,
    sMerchant,
    sTrafficTag,
    sOrder,
    generalConfig,
    sCostEnter,
    sTaskApp,
    sTaskTemplate,
    sWzReport,
    organization,
    member,
    biddingwin,
    offline,
    offlinePayment,
    sContentAudit,
    sDataReport,
    wz
  }
})
