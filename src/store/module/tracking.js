export default {
  namespaced: true,
  state: {
    pageSize: Number(localStorage.getItem('TRACKING_PAGE_SIZE')) || 50,
    // 是否隐藏“展示->安装完成”列
    hideShowToInstall: !!localStorage.getItem('TRACKING_HIDE-SHOW-TO-INSTALL')
  },
  mutations: {
    setPageSize(state, ps) {
      ps = Number(ps)
      state.pageSize = ps
      localStorage.setItem('TRACKING_PAGE_SIZE', ps)
    },
    setHideShowToInstall(state, status) {
      state.hideShowToInstall = status
      localStorage.setItem('TRACKING_HIDE-SHOW-TO-INSTALL', status)
    }
  },
  actions: {}
}
