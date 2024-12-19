// 校验规则
export default {
  pkg(rule, value, callback) {
    // clog('validatorPkg:', rule, value, callback)
    if (/^[0-9a-zA-Z_]+(\.[0-9a-zA-Z_]+)*(\.[0-9a-zA-Z_]+)$/.test(value)) {
      callback()
    } else {
      callback(new Error('包名格式不符'))
    }
  },
  bundleId(rule, value, callback) {
    if (/^\d+$/.test(value)) {
      callback()
    } else {
      callback(new Error('格式不符！BundleID为纯数字'))
    }
  },
  generateIntegerValidator(errMsg = '请输入整数') {
    return (rule, value, callback) => {
      if (!value) {
        return callback()
      }
      if (!Number.isInteger(+value)) {
        callback(new Error(errMsg))
      } else {
        callback()
      }
    }
  },
  money(rule, value, callback) {
    if (!value) {
      callback()
      return
    }
    if (!/((^[1-9]\d*)|^0)(\.\d{1,2})?$/.test(value)) {
      callback(new Error('请输入正确的金额'))
    } else {
      callback()
    }
  },
  url(rule, value, callback) {
    if (!value) {
      callback()
      return
    }
    if (!/^(?:http(s)?:\/\/)([\w\d-]+\.)+([\w\d-])+(:\d+)?([/?#](.*)?)?$/.test(value)) {
      callback(new Error('链接格式有误! 示例: https://v.douyin.com/xxx'))
    } else {
      callback()
    }
  },
  gp(rule, value, callback) {
    const reg = /^(https:\/\/play\.google\.com\/store\/apps\/details\?)(.)*(id=).+/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('Google Play市场地址错误'))
    }
  },
  appStore(rule, value, callback) {
    const reg = /^(https:\/\/itunes\.apple\.com\/)(.)*(\/id).+/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('appStore地址错误'))
    }
  },
  eventKey(rule, value, callback) {
    const reg = /^[0-9a-zA-Z_-]+$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('只能使用数字、大小写字母、下划线、中划线'))
    }
  },
  email(rule, value, callback) {
    const reg = /^[0-9a-zA-Z_\-.]+@[0-9a-zA-Z-]+(.\w{2,})+$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('邮箱格式错误'))
    }
  },
  phone(rule, value, callback) {
    const reg = /^1\d{10}$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('手机号格式错误'))
    }
  },
  userName(rule, value, callback) {
    const min = 'min' in rule ? rule.min : 2
    const max = 'max' in rule ? rule.max : 30
    const reg = new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9-]{${min - 2},${max - 2}}[a-zA-Z0-9]$`)
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error(`长度${min}~${max}位，由大小写字母、数字和中划线组成,且中划线不能在头尾`))
    }
  },
  password(rule, value, cb) {
    const reg = [/[0-9]/, /[a-z]/, /[A-Z]/]
    let comparedTypes = 0
    const rangeLength = [6, 30]
    let result = false
    for (var i = 0; i < reg.length; i++) {
      if (reg[i].test(value)) {
        comparedTypes++
      }
    }
    if (comparedTypes >= 2 && value.length >= rangeLength[0] && value.length <= rangeLength[1]) {
      result = true
    }
    if (result) {
      cb()
    } else {
      cb(new Error('必须包含大小写字母和数字，长度为6-30字符'))
    }
  },
  generateModulesValid(errMsg) {
    return (rule, value, callback) => {
      if (!value) {
        return callback()
      }
      const reg = /^(0.\d+|0|1)$/
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(errMsg))
      }
    }
  },
  generateMoneyValid(errMsg) {
    return (rule, value, callback) => {
      if (!value) {
        return callback()
      }
      const reg = /((^[1-9]\d*)|^0)(\.\d{1,2})?$/
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(errMsg))
      }
    }
  },
  nonCnCharacter(rule, value, callback) {
    const regExp = /[\u4e00-\u9fa5]/
    if (regExp.test(value)) {
      callback(new Error('不能包含中文字符！'))
      return
    }
    callback()
  },
  /**
   * 校验字符类型的整数
   * @param {Object} rule 校验规则
   * 校验规则支持如下：
   *  min: 最小值
   *  max: 最大值
   *  length: 数字字符串长度
   * @returns callback
   */
  stringInteger(rule, value, callback) {
    const reg = /^(-)?\d+$/
    const numberValue = Number(value)
    if (!reg.test(value)) {
      callback(new Error('请填写整数'))
      return
    }
    if (rule.length && value.length !== rule.length) {
      callback(new Error(`请填写${rule.length}位数字`))
      return
    }
    if (rule.min !== undefined && numberValue < rule.min) {
      callback(new Error(`不能小于${rule.min}`))
      return
    }
    if (rule.max !== undefined && numberValue > rule.max) {
      callback(new Error(`不能大于${rule.max}`))
      return
    }
    if (!Number.isSafeInteger(numberValue)) {
      callback(new Error('超过最大安全整数值'))
      return
    }
    callback()
  },
  /**
   * 校验字符类型的浮点数
   * @param {Object} rule 校验规则
   * 校验规则支持如下：
   *  min: 最小值
   *  max: 最大值
   *  decimalMax: 小数最大长度
   *  // length: 数字字符串长度
   * @returns callback
   */
  stringFloat(rule, value, callback) {
    const reg = /^(-)?\d+(\.\d+)?$/
    const numberValue = Number(value)
    let decimalParts = value.toString().match(/(\.\d+)$/)
    decimalParts = decimalParts ? decimalParts[0].slice(1) : null
    if (!reg.test(value)) {
      callback(new Error('请填写数字'))
      return
    }
    if (decimalParts) {
      const decimalLength = decimalParts.length
      if (rule.decimalMax && decimalLength > rule.decimalMax) {
        callback(new Error(`最多${rule.decimalMax}位小数`))
        return
      }
      // if (rule.decimalMin && decimalLength < rule.decimalMin) {
      //   callback(new Error(`最少${rule.decimalMax}位小数`))
      //   return
      // }
    }
    if (rule.min !== undefined && numberValue < rule.min) {
      callback(new Error(`不能小于${rule.min}`))
      return
    }
    if (rule.max !== undefined && numberValue > rule.max) {
      callback(new Error(`不能大于${rule.max}`))
      return
    }
    if (numberValue > Number.MAX_VALUE) {
      callback(new Error('超过最大安全数值'))
      return
    }
    if (numberValue < Number.NEGATIVE_INFINITY) {
      callback(new Error('超过最小安全数值'))
      return
    }
    callback()
  },
  generateHanValid(errMsg = '不可包含中文') {
    return (rule, value, callback) => {
      if (!value) {
        return callback()
      }

      const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
      if (reg.test(value)) {
        callback(new Error(errMsg))
      } else {
        callback()
      }
    }
  }
}
