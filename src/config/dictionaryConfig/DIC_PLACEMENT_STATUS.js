const DIC_PLACEMENT_STATUS = {
  shouldInit: true,
  name: '广告位状态',
  defaultExtraClass: 'status-info',
  optionsMap: {
    0: {
      label: '已删除',
      extraClass: 'status-danger'
    },
    1: {
      label: '正常',
      extraClass: 'status-success'
    }
  }
}

export default DIC_PLACEMENT_STATUS
