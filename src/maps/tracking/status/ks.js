/**
 * 快手: https://developers.e.kuaishou.com/docs/3.1.1
 * 广告投放 > 获取各层级信息
 */
export default {
  campaign: {
    // 对应快手广告组, 文档中无广告组状态
    1: {
      type: 'success',
      name: '有效'
    },
    2: {
      type: 'warning',
      name: '已暂停'
    },
    3: {
      type: 'normal',
      name: '已删除'
    }
  },
  ad: {
    // 对应快手广告组
    // '-1': { type: '', name: '不限' },
    1: { type: 'warning', name: '计划已暂停' },
    3: { type: 'warning', name: '计划超预算' },
    6: { type: 'danger', name: '余额不足' },
    11: { type: 'warning', name: '审核中' },
    12: { type: 'danger', name: '审核未通过' },
    14: { type: 'normal', name: '已结束' },
    15: { type: 'warning', name: '已暂停' },
    17: { type: 'danger', name: '组超预算' },
    19: { type: 'warning', name: '未达投放时间' },
    20: { type: 'success', name: '有效' }
  },
  creative: {
    // '-1': { type: '', name: '不限' },
    1: { type: 'warning', name: '计划已暂停' },
    3: { type: 'danger', name: '计划超预算' },
    6: { type: 'danger', name: '余额不足' },
    11: { type: 'warning', name: '组审核中' },
    12: { type: 'danger', name: '组审核未通过' },
    14: { type: 'normal', name: '已结束' },
    15: { type: 'warning', name: '组已暂停' },
    17: { type: 'danger', name: '组超预算' },
    19: { type: 'warning', name: '未达投放时间' },
    40: { type: 'normal', name: '已删除' },
    41: { type: 'warning', name: '审核中' },
    42: { type: 'danger', name: '审核未通过' },
    46: { type: 'warning', name: '已暂停' },
    52: { type: 'success', name: '投放中' },
    53: { type: 'danger', name: '作品异常' },
    54: { type: 'success', name: '视频审核通过可投放滑滑场景' },
    55: { type: 'warning', name: '部分素材审核失败' }
  }
}
