<!--
@file: App.vue
@author: lufei
@description: 根组件
 -->
<template>
  <div
    id="app"
    :class="{
      'hide-header': $route.meta.hideHeader,
      'hide-footer': $route.meta.hideFooter,
      'theme-oversea': $store.state.oversea
    }"
  >
    <base-header></base-header>
    <router-view></router-view>
    <!-- <main class="main-container">
      <div class="__inner">
        <router-view></router-view>
      </div>
    </main>
    <base-aside></base-aside> -->
    <base-footer v-if="!$route.meta.hideFooter"></base-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseHeader from './components/BaseHeader.vue'
// import BaseAside from './components/BaseAside.vue'
import BaseFooter from './components/BaseFooter.vue'
export default {
  name: 'App',
  components: {
    BaseHeader,
    // BaseAside,
    BaseFooter
  },
  props: {},

  data() {
    return {
      tForBusinessMonitor: null,
      notifyInstance: null,
      popoverStaticVersion: null
    }
  },
  computed: {
    ...mapState({
      businessMonitor: (state) => state.businessMonitor
    })
  },
  watch: {},

  created() {
    // this.handleBusinessMonitor()
    // this.tForBusinessMonitor = setInterval(this.handleBusinessMonitor, this.businessMonitor.duration)

    this.configStaticVersion()
  },
  mounted() {
    document
      .querySelector('link[rel="icon"]')
      .setAttribute(
        'href',
        `${this.$utils.doEnv.BASE_URL}${this.$store.state.oversea ? 'favicon-oversea.png' : 'favicon.png'}`
      )
  },
  destroyed() {
    clearInterval(this.tForBusinessMonitor)
  },
  methods: {
    handleBusinessMonitor() {
      const h = this.$createElement
      // TODO 监控权限KEY待替换
      if (!this.$HAS_PERMISSION('REPORT_PROMOTION_APP_VIEW')) {
        return
      }
      this.$store.dispatch('businessMonitor/GET_NOTICE_COUNT').then((res) => {
        if (res > 0) {
          this.notifyInstance = this.$notify({
            title: '监控报警',
            type: 'error',
            duration: 0,
            message: h('div', {}, [
              '发现',
              h(
                'span',
                {
                  class: ['bold', 'color-red'],
                  style: {
                    padding: '0 5px'
                  }
                },
                res
              ),
              '条报警，',
              h(
                'a',
                {
                  attrs: {
                    href: 'javascript:;'
                  },
                  class: ['underline'],
                  on: {
                    click: this.gotoBusinessMonitor
                  }
                },
                ['点击查看']
              )
            ])
          })
        }
      })
    },
    configStaticVersion() {
      if (window.location.port) {
        return
      }
      this.handleStaticVersion()
      setInterval(this.handleStaticVersion, 3600000) // 一小时后检查一次版本更新
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          // 标签页进入，检查版本更新
          this.handleStaticVersion()
        }
      })
    },
    async handleStaticVersion() {
      const version = {}
      try {
        if (!window.navigator.onLine) {
          return
        }
        const { version: newVersion, versionTime: newTime } = await this.$axios.get(
          `${window.location.origin}${this.$CDN}data/version.json?t=${Date.now()}`
        )
        version.new = newVersion
        version.newTime = newTime
      } catch (e) {
        version.new = 'unknown'
        version.newTime = 'unknown'
        return
      }
      version.current = document.documentElement.dataset.version || 'unknown'
      version.currentTime = document.documentElement.dataset.versionTime || 'unknown'
      if (version.current !== version.new) {
        document.documentElement.dataset.new = version.new
        document.documentElement.dataset.newTime = version.newTime
        this.$store
          .dispatch('sMessage/pushMessage', {
            id: '检测到新版本',
            title(h, context) {
              const handleClick = () => {
                window.location.reload(true)
                context.$refs.refMessagePopover && context.$refs.refMessagePopover.doClose()
              }
              return h('span', [
                '检测到新版本，',
                h(
                  'span',
                  {
                    class: ['link'],
                    on: { click: handleClick }
                  },
                  ['点击刷新']
                ),
                '页面'
              ])
            },
            message(h, context) {
              return h('div', [
                h('span', [`新版本：${version.newTime}`]),
                h('span', [`旧版本：${version.currentTime}`])
              ])
            }
          })
          .catch((err) => console.log(err))
      }
    },
    gotoBusinessMonitor() {
      this.notifyInstance && this.notifyInstance.close()
      if (this.$route.path === '/system/businessMonitor') {
        return
      }
      this.$router.push({
        path: '/system/businessMonitor'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.hide-header {
  .base-header {
    display: none;
  }
}
</style>
