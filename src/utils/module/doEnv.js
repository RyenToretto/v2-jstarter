import { cloneDeep } from 'lodash-es'

const doEnv = cloneDeep(import.meta.env)
Object.entries(import.meta.env).forEach(([key, value]) => {
  if (value === 'true' || value === 'false') {
    doEnv[key] = value === 'true'
  } else if (/^\d+$/.test(value)) {
    doEnv[key] = Number(value)
  } else if (value === 'null') {
    doEnv[key] = null
  } else if (value === 'undefined') {
    doEnv[key] = undefined
  }
})

export default doEnv
