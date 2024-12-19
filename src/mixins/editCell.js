export default {
  data() {
    return {
      currentEditingIndex: undefined,
      currentEditingId: undefined,
      currentEditingField: undefined
    }
  },
  computed: {
    cellEditing() {
      if (!this.currentEditingIndex && this.currentEditingIndex !== 0) {
        return false
      }
      return !(!this.currentEditingIndex && this.currentEditingIndex !== 0)
    }
  },
  methods: {
    isCellEditing(cid, column, columnIndex) {
      return !!(
        this.cellEditing &&
        this.currentEditingIndex === columnIndex &&
        this.currentEditingId === cid &&
        this.currentEditingField === column.property
      )
    },
    toEditCell(lineData, column, lineIndex) {
      if (!lineData) {
        return
      }
      if (!lineIndex && lineIndex !== 0) {
        return
      }
      this.currentEditingIndex = lineIndex
      this.currentEditingId = lineData.id
      this.currentEditingField = column.property
      this.$nextTick(() => {
        const eleInput = document.querySelector(`.editing-cell-${lineIndex}-${lineData.id} input`)
        const eleCell = document.querySelector(`.editing-cell-${lineIndex}-${lineData.id}`)
        if (eleInput) {
          eleInput.focus()
        } else {
          eleCell && eleCell.focus()
        }
      })
    },
    updateCellValue(lineData, attr, newValue) {
      this.$set(lineData, attr, newValue)
      this.currentEditingIndex = undefined
      this.currentEditingId = undefined
      this.currentEditingField = undefined
    }
  }
}
