import os from 'os'
import { cloneDeep } from 'lodash-es'

// support env type hints in vite configuration files
export function parseEnv(env) {
  const envs = cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') {
      envs[key] = value === 'true'
      // @ts-ignore
    } else if (/^\d+$/.test(value)) {
      envs[key] = Number(value)
    } else if (value === 'null') {
      envs[key] = null
    } else if (value === 'undefined') {
      envs[key] = undefined
    }
  })
  return envs
}

// 获取本机 IP
export const getMyIp = () => {
  const ifaces = os.networkInterfaces()

  for (const attr of Object.keys(ifaces)) {
    for (const info of ifaces[attr]) {
      if (info.family === 'IPv4' && info.address !== '127.0.0.1') {
        return info.address
      }
    }
  }
}
