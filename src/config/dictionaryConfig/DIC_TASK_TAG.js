const TASK_TAG_HURRY = 'hurry'
const TASK_TAG_IIMPORTANT = 'important'
const TASK_TAG_NORMAL = 'normal'

const DIC_TASK_TAG = {
  // USE-任务标签 定义
  shouldInit: true,
  name: '任务标签',
  defaultExtraClass: 'status-info',
  HURRY: TASK_TAG_HURRY,
  IIMPORTANT: TASK_TAG_IIMPORTANT,
  NORMAL: TASK_TAG_NORMAL,
  optionsMap: {
    [TASK_TAG_HURRY]: {
      label: '加急任务',
      extraClass: 'status-danger'
    },
    [TASK_TAG_IIMPORTANT]: {
      label: '重要任务',
      extraClass: 'status-warning'
    },
    [TASK_TAG_NORMAL]: {
      label: '普通任务',
      extraClass: 'status-cyan'
    }
  }
}

export default DIC_TASK_TAG
