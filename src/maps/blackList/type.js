export const BLACK_TYPE_TOKEN = 0
export const BLACK_TYPE_TOKEN_LABEL = 'Token'

export const BLACK_TYPE_UNION_ID = 1
export const BLACK_TYPE_UNION_ID_LABEL = 'Union ID'

export const BLACK_TYPE_OPEN_ID = 2
export const BLACK_TYPE_OPEN_ID_LABEL = 'User ID'

const type = {
  BLACK_TYPE_TOKEN,
  BLACK_TYPE_UNION_ID,
  BLACK_TYPE_OPEN_ID,
  BLACK_TYPE_TOKEN_LABEL,
  BLACK_TYPE_UNION_ID_LABEL,
  BLACK_TYPE_OPEN_ID_LABEL,
  labelMap: {
    [BLACK_TYPE_TOKEN]: BLACK_TYPE_TOKEN_LABEL,
    [BLACK_TYPE_UNION_ID]: BLACK_TYPE_UNION_ID_LABEL,
    [BLACK_TYPE_OPEN_ID]: BLACK_TYPE_OPEN_ID_LABEL
  },
  mustPKG(type) {
    if (type || type === 0) {
      return [BLACK_TYPE_TOKEN, BLACK_TYPE_OPEN_ID].includes(type)
    }
    return false
  },
  classMap(type) {
    let className = ''
    switch (type) {
      case BLACK_TYPE_TOKEN:
        className = 'danger'
        break
      case BLACK_TYPE_UNION_ID:
        className = 'success'
        break
      case BLACK_TYPE_OPEN_ID:
        className = 'info'
        break
      default:
    }
    return className
  }
}

export default type
