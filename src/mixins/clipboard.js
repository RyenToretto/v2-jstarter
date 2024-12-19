import Clipboard from 'clipboard'
export default {
  data() {
    return {
      clipOption: {
        selector: '.copy',
        successText: '复制成功'
      }
    }
  },
  methods: {
    attachCopy({ selector = '.copy', successText = '复制成功' }) {
      let clipboard = new Clipboard(selector)
      clipboard.on('success', (e) => {
        this.$message({
          type: 'success',
          message: successText
        })
        e.clearSelection()
      })
      this.$once('hook:beforeDestroy', () => {
        clipboard.destroy()
      })
    }
  },
  mounted() {
    this.attachCopy(this.clipOption || {})
  }
}
