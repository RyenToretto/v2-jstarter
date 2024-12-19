import langType from './langType'

const LANGUAGE_ZH_HANS = 'zh'
const LANGUAGE_ZH_HANS_LABEL = '简体中文'

const LANGUAGE_JA = 'ja'
const LANGUAGE_JA_LABEL = '日语'

const LANGUAGE_KO = 'ko'
const LANGUAGE_KO_LABEL = '韩语'

const LANGUAGE_EN = 'en'
const LANGUAGE_EN_LABEL = '英语'

const LANGUAGE_FR = 'fr'
const LANGUAGE_FR_LABEL = '法语'

const LANGUAGE_PT = 'pt'
const LANGUAGE_PT_LABEL = '葡萄牙语'

const LANGUAGE_ES = 'es'
const LANGUAGE_ES_LABEL = '西班牙语'

const LANGUAGE_AR = 'ar'
const LANGUAGE_AR_LABEL = '阿拉伯语'

const LANGUAGE_TH = 'th'
const LANGUAGE_TH_LABEL = '泰语'

const LANGUAGE_IN = 'in'
const LANGUAGE_IN_LABEL = '印尼语'

const LANGUAGE_HI = 'hi'
const LANGUAGE_HI_LABEL = '印地语'

const LANGUAGE_MS = 'ms'
const LANGUAGE_MS_LABEL = '马来语'

const LANGUAGE_VI = 'vi'
const LANGUAGE_VI_LABEL = '越南语'

const LANGUAGE_FIL = 'fil'
const LANGUAGE_FIL_LABEL = '菲律宾语'

const language = {
  langType,
  cannotChoose: false,
  defaultLang: LANGUAGE_ZH_HANS,
  labelMap: {
    [LANGUAGE_ZH_HANS]: LANGUAGE_ZH_HANS_LABEL,
    [LANGUAGE_JA]: LANGUAGE_JA_LABEL,
    [LANGUAGE_KO]: LANGUAGE_KO_LABEL,

    [LANGUAGE_EN]: LANGUAGE_EN_LABEL,
    [LANGUAGE_FR]: LANGUAGE_FR_LABEL,
    [LANGUAGE_PT]: LANGUAGE_PT_LABEL,
    [LANGUAGE_ES]: LANGUAGE_ES_LABEL,

    [LANGUAGE_AR]: LANGUAGE_AR_LABEL,

    [LANGUAGE_TH]: LANGUAGE_TH_LABEL,
    [LANGUAGE_IN]: LANGUAGE_IN_LABEL,
    [LANGUAGE_HI]: LANGUAGE_HI_LABEL,
    [LANGUAGE_MS]: LANGUAGE_MS_LABEL,
    [LANGUAGE_VI]: LANGUAGE_VI_LABEL,
    [LANGUAGE_FIL]: LANGUAGE_FIL_LABEL
  },
  phoTypeMap: {
    [LANGUAGE_ZH_HANS]: langType.LANG_TYPE_CN,
    [LANGUAGE_JA]: langType.LANG_TYPE_CN,
    [LANGUAGE_KO]: langType.LANG_TYPE_CN,

    [LANGUAGE_EN]: langType.LANG_TYPE_EN,
    [LANGUAGE_FR]: langType.LANG_TYPE_EN,
    [LANGUAGE_PT]: langType.LANG_TYPE_EN,
    [LANGUAGE_ES]: langType.LANG_TYPE_EN,

    [LANGUAGE_AR]: langType.LANG_TYPE_AR,

    [LANGUAGE_TH]: langType.LANG_TYPE_TH,
    [LANGUAGE_IN]: langType.LANG_TYPE_TH,
    [LANGUAGE_HI]: langType.LANG_TYPE_TH,
    [LANGUAGE_MS]: langType.LANG_TYPE_TH,
    [LANGUAGE_VI]: langType.LANG_TYPE_TH,
    [LANGUAGE_FIL]: langType.LANG_TYPE_TH
  },
  options: [
    { value: LANGUAGE_ZH_HANS, label: LANGUAGE_ZH_HANS_LABEL },
    { value: LANGUAGE_EN, label: LANGUAGE_EN_LABEL },
    { value: LANGUAGE_FR, label: LANGUAGE_FR_LABEL },
    { value: LANGUAGE_IN, label: LANGUAGE_IN_LABEL },
    { value: LANGUAGE_HI, label: LANGUAGE_HI_LABEL },
    { value: LANGUAGE_KO, label: LANGUAGE_KO_LABEL },
    { value: LANGUAGE_FIL, label: LANGUAGE_FIL_LABEL },
    { value: LANGUAGE_TH, label: LANGUAGE_TH_LABEL },
    { value: LANGUAGE_MS, label: LANGUAGE_MS_LABEL },
    { value: LANGUAGE_JA, label: LANGUAGE_JA_LABEL },
    { value: LANGUAGE_AR, label: LANGUAGE_AR_LABEL },
    { value: LANGUAGE_ES, label: LANGUAGE_ES_LABEL },
    { value: LANGUAGE_PT, label: LANGUAGE_PT_LABEL },
    { value: LANGUAGE_VI, label: LANGUAGE_VI_LABEL }
  ]
}
export default language
