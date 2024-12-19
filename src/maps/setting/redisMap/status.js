export const REDIS_MAP_STATUS_NOT_OK = 0
export const REDIS_MAP_STATUS_NOT_OK_LABEL = '失效'

export const REDIS_MAP_STATUS_IS_OK = 1
export const REDIS_MAP_STATUS_IS_OK_LABEL = '生效'

const status = {
  REDIS_MAP_STATUS_NOT_OK,
  REDIS_MAP_STATUS_IS_OK,
  labelMap: {
    [REDIS_MAP_STATUS_NOT_OK]: REDIS_MAP_STATUS_NOT_OK_LABEL,
    [REDIS_MAP_STATUS_IS_OK]: REDIS_MAP_STATUS_IS_OK_LABEL
  },
  classMap(type) {
    let className = ''
    switch (type) {
      case REDIS_MAP_STATUS_NOT_OK:
        className = 'danger'
        break
      case REDIS_MAP_STATUS_IS_OK:
        className = 'success'
        break
      default:
    }
    return className
  }
}

export default status
