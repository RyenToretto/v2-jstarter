import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
const plugin = {}
plugin.install = (vue, options) => {
  vue.prototype.$dayjs = dayjs
  window.dayjs = dayjs
}
export default plugin
