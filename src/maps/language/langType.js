const LANG_TYPE_CN = 'east_asia'
const LANG_TYPE_CN_LABEL = '东亚系'

const LANG_TYPE_EN = 'england_europe'
const LANG_TYPE_EN_LABEL = '英欧系'

const LANG_TYPE_AR = 'arab'
const LANG_TYPE_AR_LABEL = '阿拉伯系'

const LANG_TYPE_TH = 'southeast_asia'
const LANG_TYPE_TH_LABEL = '东南亚系'

const langType = {
  LANG_TYPE_CN,
  LANG_TYPE_EN,
  LANG_TYPE_AR,
  LANG_TYPE_TH,
  labelMap: {
    [LANG_TYPE_CN]: LANG_TYPE_CN_LABEL,
    [LANG_TYPE_EN]: LANG_TYPE_EN_LABEL,
    [LANG_TYPE_AR]: LANG_TYPE_AR_LABEL,
    [LANG_TYPE_TH]: LANG_TYPE_TH_LABEL
  },
  options: [
    { value: LANG_TYPE_CN, label: LANG_TYPE_CN_LABEL },
    { value: LANG_TYPE_EN, label: LANG_TYPE_EN_LABEL },
    { value: LANG_TYPE_AR, label: LANG_TYPE_AR_LABEL },
    { value: LANG_TYPE_TH, label: LANG_TYPE_TH_LABEL }
  ]
}
export default langType
