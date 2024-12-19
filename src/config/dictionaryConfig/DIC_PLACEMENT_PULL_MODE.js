const DIC_PLACEMENT_PULL_MODE = {
  shouldInit: true,
  name: '广告位拉取方式',
  defaultExtraClass: 'status-info',
  optionsMap: {
    0: {
      label: '串行',
      extraClass: 'status-warning'
    },
    1: {
      label: '并行',
      extraClass: 'status-info'
    }
  }
}

export default DIC_PLACEMENT_PULL_MODE
