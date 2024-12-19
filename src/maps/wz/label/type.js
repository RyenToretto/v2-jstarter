export const WZ_FIX_TYPE = '单个offer'

export const WZ_TYPE_ALL = 0
export const WZ_TYPE_ALL_LABEL = '全部'

export const WZ_TYPE_RATIO = 1
export const WZ_TYPE_RATIO_LABEL = '奖励分成比'

export const WZ_TYPE_LIMIT = 2
export const WZ_TYPE_LIMIT_LABEL = '消耗上限'

const type = {
  WZ_TYPE_ALL,
  WZ_TYPE_RATIO,
  WZ_TYPE_LIMIT,

  WZ_FIX_TYPE,
  WZ_TYPE_ALL_LABEL,
  WZ_TYPE_RATIO_LABEL,
  WZ_TYPE_LIMIT_LABEL,
  ratioLabel: WZ_TYPE_RATIO_LABEL,
  limitLabel: WZ_FIX_TYPE + WZ_TYPE_LIMIT_LABEL,
  labelMap: {
    [WZ_TYPE_ALL]: WZ_TYPE_ALL_LABEL,
    [WZ_TYPE_RATIO]: WZ_TYPE_RATIO_LABEL,
    [WZ_TYPE_LIMIT]: WZ_FIX_TYPE + WZ_TYPE_LIMIT_LABEL
  },
  classMap(type) {
    let className = ''
    switch (type) {
      case WZ_TYPE_ALL:
        className = 'info'
        break
      case WZ_TYPE_RATIO:
        className = 'primary'
        break
      case WZ_TYPE_LIMIT:
        className = 'success'
        break
      default:
    }
    return className
  }
}

export default type
