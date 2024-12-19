export const AUDIT_STATUS_PAY_SUCCESS = 0
export const AUDIT_STATUS_PAY_SUCCESS_LABEL = '已支付'

export const AUDIT_STATUS_PAYING = 1
export const AUDIT_STATUS_PAYING_LABEL = '支付中'

export const AUDIT_STATUS_PAY_FAIL = 2
export const AUDIT_STATUS_PAY_FAIL_LABEL = '支付失败'

export const AUDIT_STATUS_WAIT = 301
export const AUDIT_STATUS_WAIT_LABEL = '待审核'

export const AUDIT_STATUS_PASS = 302
export const AUDIT_STATUS_PASS_LABEL = '已通过'

export const AUDIT_STATUS_REJECT = 303
export const AUDIT_STATUS_REJECT_LABEL = '已拒绝'

const status = {
  AUDIT_STATUS_PAY_SUCCESS,
  AUDIT_STATUS_PAYING,
  AUDIT_STATUS_PAY_FAIL,
  AUDIT_STATUS_WAIT,
  AUDIT_STATUS_PASS,
  AUDIT_STATUS_REJECT,
  AUDIT_STATUS_PAY_SUCCESS_LABEL,
  AUDIT_STATUS_PAYING_LABEL,
  AUDIT_STATUS_PAY_FAIL_LABEL,
  AUDIT_STATUS_WAIT_LABEL,
  AUDIT_STATUS_PASS_LABEL,
  AUDIT_STATUS_REJECT_LABEL,
  labelMap: {
    [AUDIT_STATUS_PAY_SUCCESS]: AUDIT_STATUS_PAY_SUCCESS_LABEL,
    [AUDIT_STATUS_PAYING]: AUDIT_STATUS_PAYING_LABEL,
    [AUDIT_STATUS_PAY_FAIL]: AUDIT_STATUS_PAY_FAIL_LABEL,
    [AUDIT_STATUS_WAIT]: AUDIT_STATUS_WAIT_LABEL,
    [AUDIT_STATUS_PASS]: AUDIT_STATUS_PASS_LABEL,
    [AUDIT_STATUS_REJECT]: AUDIT_STATUS_REJECT_LABEL
  },
  classMap(type) {
    let className = ''
    switch (type) {
      case AUDIT_STATUS_PAY_FAIL:
        className = 'warning'
        break
      case AUDIT_STATUS_PAY_SUCCESS:
      case AUDIT_STATUS_PAYING:
        className = 'info'
        break
      case AUDIT_STATUS_WAIT:
        className = 'primary'
        break
      case AUDIT_STATUS_PASS:
        className = 'success'
        break
      case AUDIT_STATUS_REJECT:
        className = 'danger'
        break
      default:
    }
    return className
  }
}

export default status
