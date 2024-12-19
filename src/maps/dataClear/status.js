export const DATA_CLEAR_STATUS_OFF = 0
export const DATA_CLEAR_STATUS_OFF_LABEL = '清理失败'

export const DATA_CLEAR_STATUS_ON = 1
export const DATA_CLEAR_STATUS_ON_LABEL = '清理成功'

const status = {
  DATA_CLEAR_STATUS_OFF,
  DATA_CLEAR_STATUS_ON,
  DATA_CLEAR_STATUS_OFF_LABEL,
  DATA_CLEAR_STATUS_ON_LABEL,
  labelMap: {
    [DATA_CLEAR_STATUS_OFF]: DATA_CLEAR_STATUS_OFF_LABEL,
    [DATA_CLEAR_STATUS_ON]: DATA_CLEAR_STATUS_ON_LABEL
  },
  classMap(type) {
    let className = ''
    switch (type) {
      case DATA_CLEAR_STATUS_OFF:
        className = 'danger'
        break
      case DATA_CLEAR_STATUS_ON:
        className = 'success'
        break
      default:
    }
    return className
  }
}

export default status
