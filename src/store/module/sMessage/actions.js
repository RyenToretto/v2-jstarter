import { PUSH_MESSAGE, REMOVE_MESSAGE, ADD_VIEWER_COUNT } from './mutation-type'

export default {
  pushMessage(actionContext, payload) {
    actionContext.commit(PUSH_MESSAGE, payload)
  },
  removeMessage(actionContext, payload) {
    actionContext.commit(REMOVE_MESSAGE, payload)
  },
  addViewerCount(actionContext) {
    actionContext.commit(ADD_VIEWER_COUNT)
  }
}
