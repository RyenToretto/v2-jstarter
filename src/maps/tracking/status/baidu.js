/**
 * 百度：https://dev2.baidu.com/content?sceneType=0&pageId=100035&nodeId=361&subhead=
 * 整体业务 > 信息流广告投放
 */
export default {
  campaign: {
    // 计划
    0: {
      type: 'success',
      name: '有效'
    },
    1: {
      type: 'warning',
      name: '处于暂停时段'
    },
    2: {
      type: 'warning',
      name: '暂停推广'
    },
    3: {
      type: 'warning',
      name: '推广计划预算不足'
    },
    4: {
      type: 'warning',
      name: '账户待激活'
    },
    11: {
      type: 'error',
      name: '账户预算不足'
    },
    20: {
      type: 'error',
      name: '账户余额为零'
    },
    23: {
      type: 'error',
      name: '被禁推'
    },
    24: {
      type: 'normal',
      name: 'app已下线'
    }
  },
  ad: {
    // 原生推广单元
    0: {
      type: 'success',
      name: '有效'
    },
    1: {
      type: 'warning',
      name: '暂停推广'
    },
    2: {
      type: 'warning',
      name: '推广计划暂停推广'
    }
  },
  creative: {
    // 原生创意
    0: {
      type: 'success',
      name: '有效'
    },
    1: {
      type: 'warning',
      name: '暂停推广'
    },
    2: {
      type: 'warning',
      name: '审核中'
    },
    3: {
      type: 'error',
      name: '审核未通过'
    },
    4: {
      type: 'error',
      name: '无效'
    },
    5: {
      type: 'warning',
      name: '部分有效'
    }
  }
}
