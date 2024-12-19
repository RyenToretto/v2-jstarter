/**
 * 上报统计
 *
 * @param {Array} param 上报参数：[eventCategory, eventAction, eventLabel]|[pageUrl]
 * @param {string} type 上报类型 （"event"|"pageView"）
 * @return {Boolen} false
 */
/* eslint-disable */
const IS_DEV = window.location.port

export default (param, type = 'event') => {
  // 校验参数
  if (!(param instanceof Array)) {
    return false
  }
  if (type === 'event') {
    if (!IS_DEV) {
      // gtag && gtag('event', param[1], {
      //   'event_category': param[0],
      //   'event_label': param[2]
      // })
    } else {
      console.log(
        '%cevent trigger:',
        'background:#096;color:#fff;padding:3px 5px; border-radius:5px;',
        param.join(' , ')
      )
    }
  } else if (type === 'pageView') {
    if (!IS_DEV) {
      // gtag && gtag('event', 'page_view', {
      //   page_path: param[0]
      // })
    } else {
      console.log(
        '%cpageView:',
        'background:#d2ae00;color:#fff;padding:3px 5px; border-radius:5px;',
        param.join(' , ')
      )
    }
  }
}
