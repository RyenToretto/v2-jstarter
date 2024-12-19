import Vue from 'vue'
import waterMark from './waterMask'
Vue.directive(waterMark.name, waterMark)
Vue.directive('removeAriaHidden', {
  bind(el, binding) {
    const ariaEls = el.querySelectorAll('*[aria-hidden]')
    ariaEls.forEach((item) => {
      item.removeAttribute('aria-hidden')
    })
  }
})
