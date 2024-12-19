/**
 * @file: waterMark.js
 * @author: lufei
 * @description: 水印
 **/
import Vue from 'vue'
import waterMask from './waterMask.vue'
const Mask = Vue.extend(waterMask)
function showMask(el, binding) {
  const visible = binding.value !== undefined ? Boolean(binding.value) : true
  if (!['absolute', 'fixed'].includes(el.originalPosition)) {
    el.style.position = 'relative'
  }
  // console.log('showMask', el.instance, el.waterMask, visible)
  if (!el.domVisible) {
    el.appendChild(el.mask)
    el.domVisible = true
  }
  Vue.nextTick(() => {
    el.instance.visible = visible
  })
}
export default {
  name: 'waterMark',
  bind(el, binding, vnode) {
    const ctx = vnode.context
    const mask = new Mask({
      el: document.createElement('div'),
      data: {
        foo: ctx.$NICK_NAME,
        visible: true
      }
    })
    el.instance = mask
    el.mask = mask.$el
  },
  inserted(el, binding, vnode) {
    el.originalPosition = getComputedStyle(el).position
    // el.mask = document.createElement('div')
    // console.log('inserted,', el)
    showMask(el, binding)
  },
  update(el, binding, vnode) {
    showMask(el, binding)
  },
  unbind(el) {
    // console.log('unbind')
    el.instance && el.instance.$destroy()
  }
}
