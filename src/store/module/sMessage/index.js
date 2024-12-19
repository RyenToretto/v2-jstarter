import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    allMessage: [
      /* {
        id: 1,
        closeable: true,
        title: '回答邀请',
        message: '小知邀请你回答问题「大专软件技术毕业后前端应该去培训吗?」'
      }, {
        id: 2,
        closeable: true,
        title (h, context) {
          const handleClick = () => console.log(1)
          return (<span>检测到新版本，<span class="link" onClick={ handleClick }>点击刷新</span>页面</span>)
        },
        message (h, context) {
          return (<div>
            <span>{ '新版本：1995-08-08 08:08:08' }</span>
            <span>{ '旧版本：2023-03-02 11:45:47' }</span>
          </div>)
        }
      } */
    ],
    viewerCount: 1
  },
  mutations,
  actions,
  getters
}
