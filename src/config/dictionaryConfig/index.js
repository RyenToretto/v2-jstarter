import DIC_ACCOUNT_TYPE from './DIC_ACCOUNT_TYPE'
import DIC_CHANNEL_APP_STATUS from './DIC_CHANNEL_APP_STATUS'
import DIC_CHANNEL_PLACEMENT_STATUS from './DIC_CHANNEL_PLACEMENT_STATUS'
import DIC_MEDIATION_CHANNEL from './DIC_MEDIATION_CHANNEL'
import DIC_PLACEMENT_ORIENTATION from './DIC_PLACEMENT_ORIENTATION'
import DIC_PLACEMENT_PULL_MODE from './DIC_PLACEMENT_PULL_MODE'
import DIC_PLACEMENT_STATUS from './DIC_PLACEMENT_STATUS'
import DIC_TASK_TAG from './DIC_TASK_TAG'

export const dictionaryConfig = {
  DIC_ACCOUNT_TYPE, // USE-账号类型 暴露
  DIC_CHANNEL_APP_STATUS,
  DIC_CHANNEL_PLACEMENT_STATUS,
  DIC_MEDIATION_CHANNEL,
  DIC_PLACEMENT_ORIENTATION,
  DIC_PLACEMENT_PULL_MODE,
  DIC_PLACEMENT_STATUS,
  DIC_TASK_TAG // USE-任务标签 暴露
}

const getOptionListMap = () => {
  const newMap = {}
  Object.keys(dictionaryConfig).forEach((code) => {
    newMap[code] = Object.keys(dictionaryConfig[code].optionsMap).map((key) => key)
  })
  return newMap
}
export const mockOptionListMap = getOptionListMap()

const getMockDictionaryList = () => {
  let startId = 1001
  return Object.keys(dictionaryConfig).map((code) => {
    return {
      id: startId++,
      code,
      name: dictionaryConfig[code].name,
      createBy: 'koujianfeng',
      createTime: '1629791349410',
      lastModifyBy: 'koujianfeng',
      lastModifyTime: '1629791349410'
    }
  })
}
export const mockDataDictionaryList = getMockDictionaryList()

const getMockDataDictionaryOptionsMap = () => {
  const newMap = {}
  Object.keys(dictionaryConfig).forEach((code) => {
    newMap[code] = Object.keys(dictionaryConfig[code].optionsMap).map((key, index) => {
      return {
        sort: index + 1,
        id: index + 1,
        code: key,
        name: dictionaryConfig[code].optionsMap[key].label,
        dataDictionaryId: 666666,
        createBy: 'koujianfeng',
        createTime: '1629791349410',
        lastModifyBy: 'koujianfeng',
        lastModifyTime: '1629791349410'
      }
    })
  })
  return newMap
}
export const mockDataDictionaryOptionsMap = getMockDataDictionaryOptionsMap()

const getMockDictionaryItemListMap = () => {
  const newMap = {}
  Object.keys(dictionaryConfig).forEach((code) => {
    const lists = Object.keys(dictionaryConfig[code].optionsMap).map((key, index) => {
      return {
        sort: index + 1,
        id: index + 1,
        code: key,
        name: dictionaryConfig[code].optionsMap[key].label,
        dataDictionaryId: 666666,
        createBy: 'koujianfeng',
        createTime: '1629791349410',
        lastModifyBy: 'koujianfeng',
        lastModifyTime: '1629791349410'
      }
    })
    newMap[code] = {
      code: '0000',
      message: '0000',
      success: true,
      result: lists
    }
  })
  return newMap
}
export const mockDictionaryItemListMap = getMockDictionaryItemListMap()

export const dictionaryCodeShouldInit = Object.keys(dictionaryConfig).map((code) => code)
