import Vue from 'vue'
import { createApp, h } from 'vue-demi'

import 'virtual:svg-icons-register'

// === 全局组件
import '@/components/globalComponents'

import App from './App.vue'
import './style.css'

// === 插入全局变量
window.MS_PER_DAY = 24 * 60 * 60 * 1000 // 一天的毫秒数
Vue.config.productionTip = false

function render(instance) {
  const app = createApp({
    render: () => h(instance)
  })
  app.mount('#app')
}

render(App)
