const CHANNEL_PLACEMENT_STATUS_DELETE = 0
const CHANNEL_PLACEMENT_STATUS_NORMAL = 1

const DIC_CHANNEL_PLACEMENT_STATUS = {
  shouldInit: true,
  name: '渠道广告位状态',
  defaultExtraClass: 'status-info',
  DELETE: CHANNEL_PLACEMENT_STATUS_DELETE,
  NORMAL: CHANNEL_PLACEMENT_STATUS_NORMAL,
  optionsMap: {
    [CHANNEL_PLACEMENT_STATUS_DELETE]: {
      label: '已删除',
      extraClass: 'status-danger'
    },
    [CHANNEL_PLACEMENT_STATUS_NORMAL]: {
      label: '正常',
      extraClass: 'status-success'
    }
  }
}

export default DIC_CHANNEL_PLACEMENT_STATUS
