export const DATA_CLEAR_STATUS_COIN = 1
export const DATA_CLEAR_STATUS_COIN_LABEL = '金币'

export const DATA_CLEAR_STATUS_RED = 2
export const DATA_CLEAR_STATUS_RED_LABEL = '红包'

export const DATA_CLEAR_STATUS_INVITE = 3
export const DATA_CLEAR_STATUS_INVITE_LABEL = '邀请功能'

export const DATA_CLEAR_STATUS_CLEAR = 4
export const DATA_CLEAR_STATUS_CLEAR_LABEL = 'AB包缓存清理'

const type = {
  DATA_CLEAR_STATUS_COIN,
  DATA_CLEAR_STATUS_RED,
  DATA_CLEAR_STATUS_INVITE,
  DATA_CLEAR_STATUS_CLEAR,
  DATA_CLEAR_STATUS_COIN_LABEL,
  DATA_CLEAR_STATUS_RED_LABEL,
  DATA_CLEAR_STATUS_INVITE_LABEL,
  DATA_CLEAR_STATUS_CLEAR_LABEL,
  labelMap: {
    [DATA_CLEAR_STATUS_COIN]: DATA_CLEAR_STATUS_COIN_LABEL,
    [DATA_CLEAR_STATUS_RED]: DATA_CLEAR_STATUS_RED_LABEL,
    [DATA_CLEAR_STATUS_INVITE]: DATA_CLEAR_STATUS_INVITE_LABEL,
    [DATA_CLEAR_STATUS_CLEAR]: DATA_CLEAR_STATUS_CLEAR_LABEL
  },
  classMap(type) {
    let className = ''
    switch (type) {
      case DATA_CLEAR_STATUS_COIN:
        className = 'warning'
        break
      case DATA_CLEAR_STATUS_RED:
        className = 'danger'
        break
      case DATA_CLEAR_STATUS_INVITE:
        className = 'success'
        break
      case DATA_CLEAR_STATUS_CLEAR:
        className = 'purple'
        break
      default:
    }
    return className
  }
}

export default type
