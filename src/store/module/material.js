export default {
  namespaced: true,
  state: {
    pageSize: Number(localStorage.getItem('MATERIAL_PAGE_SIZE')) || 20,
    pageSizeForList: Number(localStorage.getItem('MATERIAL_LIST_PAGE_SIZE')) || 20
  },
  mutations: {
    setPageSize(state, ps) {
      ps = Number(ps)
      state.pageSize = ps
      localStorage.setItem('MATERIAL_PAGE_SIZE', ps)
    },
    setPageSizeForList(state, ps) {
      ps = Number(ps)
      state.pageSizeForList = ps
      localStorage.setItem('MATERIAL_LIST_PAGE_SIZE', ps)
    }
  },
  actions: {}
}
