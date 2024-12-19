export const GROUP_MACHINE = 'manu'
export const GROUP_MACHINE_LABEL = '设备品牌'

export const GROUP_SYSV = 'sysv'
export const GROUP_SYSV_LABEL = '系统版本'

export const GROUP_CHANNEL = 'channel'
export const GROUP_CHANNEL_LABEL = '渠道'

export const GROUP_PLAT = 'plat'
export const GROUP_PLAT_LABEL = '系统平台'

export const GROUP_SDK_VERSION = 'sdkna'
export const GROUP_SDK_VERSION_LABEL = 'SDK版本'

export const GROUP_APP_VERSION = 'appvn'
export const GROUP_APP_VERSION_LABEL = 'APP版本'

export const GROUP_NET = 'net'
export const GROUP_NET_LABEL = '网络类型'

const groupOptionMap = {
  GROUP_MACHINE,
  GROUP_SYSV,
  GROUP_CHANNEL,
  GROUP_PLAT,
  GROUP_SDK_VERSION,
  GROUP_APP_VERSION,
  GROUP_NET,
  labelMap: {
    [GROUP_MACHINE]: GROUP_MACHINE_LABEL,
    [GROUP_SYSV]: GROUP_SYSV_LABEL,
    [GROUP_CHANNEL]: GROUP_CHANNEL_LABEL,
    [GROUP_PLAT]: GROUP_PLAT_LABEL,
    [GROUP_SDK_VERSION]: GROUP_SDK_VERSION_LABEL,
    [GROUP_APP_VERSION]: GROUP_APP_VERSION_LABEL,
    [GROUP_NET]: GROUP_NET_LABEL
  }
}

export default groupOptionMap
