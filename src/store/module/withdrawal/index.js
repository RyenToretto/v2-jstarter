const MODULE_PREFIX = 'WITHDRAWAL'
const PKG_KEY = `${MODULE_PREFIX}_PKG`
export default {
  namespaced: true,
  state: {
    pkg: localStorage.getItem(PKG_KEY) || ''
  },
  mutations: {
    setPkg(state, pkg) {
      state.pkg = pkg
      localStorage.setItem(PKG_KEY, pkg)
    }
  },
  modules: {}
}
