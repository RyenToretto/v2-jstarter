import getRealType from './getRealType'

export default {
  get(sk) {
    if (!sk) {
      return {}
    }

    try {
      const originStr = localStorage.getItem(sk)
      return (originStr ? JSON.parse(originStr) : null) || {}
    } catch (e) {
      return {}
    }
  },
  read(sk, keys = []) {
    if (!sk || !keys || !keys.length) {
      return {}
    }
    const originMap = this.get(sk)
    return keys.reduce((newResult, eachAttr) => {
      if (eachAttr) {
        newResult[eachAttr] = originMap[eachAttr]
      }
      return newResult
    }, {})
  },
  write(sk, obj) {
    if (!sk || !obj || getRealType(obj) !== 'object') {
      return
    }

    try {
      const newObj = Object.entries(obj).reduce((newMap, eachEntry) => {
        const [attr, fieldValue] = eachEntry
        if (attr) {
          newMap[attr] = fieldValue
        }
        return newMap
      }, this.get(sk))
      localStorage.setItem(sk, JSON.stringify(newObj))
    } catch (err) {
      console.log(err)
    }
  }
}
