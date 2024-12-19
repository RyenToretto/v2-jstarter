import getScrollBarWidth from './getScrollBarWidth'
import getStyle from './getStyle'

const lockScroll = () => {
  let scrollBarWidth
  let computedBodyPaddingRight
  const withoutHiddenClass = !document.body.classList.contains('el-popup-parent--hidden')
  if (withoutHiddenClass) {
    computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10)
  }
  scrollBarWidth = getScrollBarWidth()
  let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight
  let bodyOverflowY = getStyle(document.body, 'overflowY')
  if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && withoutHiddenClass) {
    document.body.style.paddingRight = computedBodyPaddingRight + scrollBarWidth + 'px'
    document.body.classList.add('el-popup-parent--hidden')
  }
}

export default lockScroll
