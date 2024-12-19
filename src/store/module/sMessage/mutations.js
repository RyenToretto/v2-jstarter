import { PUSH_MESSAGE, REMOVE_MESSAGE, ADD_VIEWER_COUNT } from './mutation-type'

export default {
  [PUSH_MESSAGE](state, payload) {
    if (!payload) {
      return
    }
    if (payload.id) {
      const i = state.allMessage.findIndex((e) => e.id === payload.id)
      if (i >= 0) {
        state.allMessage.splice(i, 1)
      }
    }
    state.allMessage.unshift({
      ...payload,
      id: payload.id || Date.now()
    })
  },
  [REMOVE_MESSAGE](state, payload) {
    if (!payload) {
      return
    }
    const i = state.allMessage.findIndex((e) => e.id === payload.id)
    if (i >= 0) {
      state.allMessage.splice(i, 1)
    }
  },
  [ADD_VIEWER_COUNT](state) {
    state.viewerCount = state.viewerCount + 1
  }
}
