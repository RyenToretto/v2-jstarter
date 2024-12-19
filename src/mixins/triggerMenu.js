export default {
  data() {
    return {
      hasValidRoute: false
    }
  },
  methods: {
    triggerMenu() {
      if (this.$route.meta.isHeaderTab) {
        const menuDOM = this.$refs?.menu?.$el.querySelector('[role="menuitem"].el-menu-item')
        if (menuDOM && menuDOM.dataset && menuDOM.dataset.path) {
          this.$router.replace(menuDOM.dataset.path).catch((e) => console.log(e))
        }
      }
      if (this.$refs.menu) {
        const rList = this.$refs.menu.useOversea(this.menus)
        this.hasValidRoute = rList && rList.length
      } else {
        this.hasValidRoute = true
      }
    }
  }
}
