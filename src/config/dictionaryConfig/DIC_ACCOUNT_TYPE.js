const ACCOUNT_TYPE_INSIDE = 3101
const ACCOUNT_TYPE_OUTSIDE = 3103
const ACCOUNT_TYPE_DOUBLE = 3104
const ACCOUNT_TYPE_JU_ZHUAN = 3105

const DIC_ACCOUNT_TYPE = {
  // USE-账号类型 定义
  shouldInit: true,
  name: '账号类型',
  defaultExtraClass: 'status-info',
  INSIDE: ACCOUNT_TYPE_INSIDE,
  OUTSIDE: ACCOUNT_TYPE_OUTSIDE,
  DOUBLE: ACCOUNT_TYPE_DOUBLE,
  JU_ZHUAN: ACCOUNT_TYPE_JU_ZHUAN,
  optionsMap: {
    [ACCOUNT_TYPE_INSIDE]: {
      label: '内部账号',
      extraClass: 'status-success'
    },
    [ACCOUNT_TYPE_OUTSIDE]: {
      label: '外部账号',
      extraClass: 'status-warning'
    },
    [ACCOUNT_TYPE_DOUBLE]: {
      label: '双接账号',
      extraClass: 'status-danger'
    },
    [ACCOUNT_TYPE_JU_ZHUAN]: {
      label: '巨赚',
      extraClass: 'status-cyan'
    }
  }
}

export default DIC_ACCOUNT_TYPE
