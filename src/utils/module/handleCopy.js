import Clipboard from 'clipboard'
import { Message } from 'element-ui'

export default function handleCopy(value, tips = '复制成功') {
  if (!value && value !== 0) {
    return
  }
  Clipboard.copy(`${value}`)
  try {
    Message.closeAll()
  } catch (e) {
    /* empty */
  }
  Message.success(tips)
}
