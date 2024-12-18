<template>
  <svg
    :class="[prefixCls, $attrs.class, spin && 'svg-icon-spin']"
    :style="getStyle"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 16
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: 'do'
    }
  },
  computed: {
    symbolId() {
      return `#${this.prefix}-${this.name}`
    },
    getStyle() {
      let s = `${this.size}`
      s = `${s.replace('px', '')}px`
      return {
        width: s,
        height: s
      }
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}

.do-svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
