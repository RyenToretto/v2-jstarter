export default [
  {
    path: 'apps',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/system/apps.vue'),
    meta: {
      title: 'APP管理',
      permission: 'SYS_APP_VIEW'
    }
  },
  {
    path: 'redis/map',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/redis-map.vue'),
    meta: {
      title: '高级配置',
      permission: 'SYS_APP-REDIS-MAP_VIEW'
    }
  },
  {
    path: 'apk',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/system/apk.vue'),
    meta: {
      title: '版本管理',
      permission: 'SETTING_APP-VERSION_VIEW',
      onlyInternal: true
    }
  },
  {
    path: 'events',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/system/events.vue'),
    meta: {
      title: '事件配置',
      permission: 'SETTING_EVENT_VIEW'
    }
  },
  {
    path: 'appId',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/system/appId.vue'),
    meta: {
      title: '变现配置',
      permission: 'SETTING_APPID_VIEW'
    }
  }
]
