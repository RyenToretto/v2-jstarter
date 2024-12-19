export default {
  props: {
    modelValue: {
      default: ''
    },
    isMultiple: {
      type: Boolean,
      default() {
        return true
      }
    },
    attrList: {
      type: String,
      default() {
        return 'tableData'
      }
    },
    lineKey: {
      type: String,
      default() {
        return 'id'
      }
    },
    checkedIds: Array,
    enableSelector: {
      type: Boolean,
      default() {
        return false
      }
    },
    enableCache: {
      type: Boolean,
      default() {
        return false
      }
    },
    inDialog: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      refTable: '',
      mustAttrList: '',
      selectLine: [],
      cacheSelected: [],

      batchRemoving: false,
      batchRecovering: false,
      batchBaning: false,
      batchStarting: false
    }
  },
  computed: {
    statusOfSelect() {
      const targetList = this.getTargetList()
      if (!targetList || !targetList.length) {
        return 'none-selected'
      }
      let cannotBeAll = false
      let cannotBeNone = false
      for (const each of Object.values(targetList)) {
        if (this.selectLine.every((s) => s[this.lineKey] !== each[this.lineKey])) {
          cannotBeAll = true
        }
        if (this.selectLine.some((s) => s[this.lineKey] === each[this.lineKey])) {
          cannotBeNone = true
        }
      }
      return cannotBeNone ? (cannotBeAll ? 'half-selected' : 'all-selected') : 'none-selected'
    }
  },
  methods: {
    writeCacheSelect(newSelected) {
      if (this.enableSelector && this.enableCache) {
        try {
          if (!this.cacheSelected) {
            this.cacheSelected = []
          }

          if (newSelected && newSelected.length) {
            for (const eachNew of newSelected) {
              this.pushCacheSelect(eachNew)
            }
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    removeCacheSelect(target) {
      if (this.enableSelector && this.enableCache) {
        try {
          const findIndex = this.cacheSelected.findIndex(
            (f) => f[this.lineKey] === target[this.lineKey]
          )
          if (findIndex >= 0) {
            this.cacheSelected.splice(findIndex, 1)
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    pushCacheSelect(target) {
      if (this.enableSelector && this.enableCache) {
        try {
          if (!this.cacheSelected) {
            this.cacheSelected = []
          }

          const findIndex = this.cacheSelected.findIndex(
            (f) => f[this.lineKey] === target[this.lineKey]
          )
          if (findIndex === -1) {
            this.cacheSelected.push({ ...target })
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    toggleCacheSelect(target) {
      if (this.enableSelector && this.enableCache) {
        try {
          if (!this.cacheSelected) {
            this.cacheSelected = []
          }

          const targetIndex = this.cacheSelected.findIndex(
            (i) => i[this.lineKey] === target[this.lineKey]
          )
          if (target && target[this.lineKey] && targetIndex >= 0) {
            this.cacheSelected.splice(targetIndex, 1)
          } else {
            this.cacheSelected.push({ ...target })
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    getTargetList() {
      if (this.mustAttrList) {
        return this[this.mustAttrList]
      }
      return this[this.attrList]
    },
    rowClickLine(row, column, event) {
      if (!this.enableSelector) {
        return
      }
      this.chooseCard({ e: event, info: row })
    },
    changeSelectionLine(selectLine) {
      this.selectLine = selectLine
      this.writeCacheSelect(selectLine)
      if (this.enableSelector) {
        this.emitChange()
      }
    },
    toggleBatchSelect() {
      const targetList = this.getTargetList()
      if (this.statusOfSelect === 'all-selected') {
        for (const each of Object.values(targetList)) {
          this.removeCacheSelect(each)
          const findIndex = this.selectLine.findIndex((f) => f[this.lineKey] === each[this.lineKey])
          if (findIndex >= 0) {
            this.selectLine.splice(findIndex, 1)
          }
        }
        this.emitChange()
        return
      }
      for (const each of Object.values(targetList)) {
        this.pushCacheSelect(each)
        const findIndex = this.selectLine.findIndex((f) => f[this.lineKey] === each[this.lineKey])
        if (findIndex === -1) {
          this.selectLine.push({ ...each })
        }
      }
      this.emitChange()
    },
    chooseCard({ info }) {
      if (!this.isMultiple) {
        this.selectLine.length >= 1
          ? this.selectLine.splice(0, 1, info)
          : this.selectLine.push(info)
        this.emitChange()
        return
      }
      this.toggleCacheSelect(info)
      const targetIndex = this.selectLine.findIndex((i) => i[this.lineKey] === info[this.lineKey])
      if (info && info[this.lineKey] && targetIndex >= 0) {
        this.selectLine.splice(targetIndex, 1)
      } else {
        this.selectLine.push(info)
      }
      this.emitChange()
    },
    resetCacheSelect() {
      if (this.enableSelector && this.enableCache) {
        const allWaitList = this.getTargetList()
        const newWait = []
        if (allWaitList && allWaitList.length && this.cacheSelected && this.cacheSelected.length) {
          for (const eachWait of allWaitList) {
            const fIndex = this.cacheSelected.findIndex(
              (i) => i[this.lineKey] === eachWait[this.lineKey]
            )
            if (fIndex >= 0) {
              newWait.push(eachWait)
            }
          }
        }

        if (newWait && newWait.length) {
          this.selectLine.splice(0, this.selectLine.length, ...newWait)
        } else {
          this.selectLine.splice(0, this.selectLine.length)
        }
      }
    },
    clear() {
      if (this.refTable && this.$refs[this.refTable] && this.$refs[this.refTable].clearSelection) {
        this.$refs[this.refTable].clearSelection()
      }
      this.selectLine.splice(0, this.selectLine.length)
      this.emitChange()
    },
    emitChange() {
      const originSelect =
        this.enableSelector && this.enableCache ? this.cacheSelected : this.selectLine
      let result = null
      result = this.$utils.deepClone(
        this.$utils.getRealType(originSelect) === 'array'
          ? this.isMultiple
            ? originSelect
            : originSelect[0]
          : this.isMultiple
            ? originSelect
              ? [originSelect]
              : []
            : originSelect || {}
      )
      this.doEmit(result)
    },
    doEmit(newValue) {
      this.$emit('input', newValue)
      this.$emit('change', newValue)
    }
  }
}
