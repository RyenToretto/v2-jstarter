const list = {
  code: '0000',
  message: '0000',
  success: true,
  result: {
    total: 2,
    'lists|10': [
      {
        'id|+1': 1001, // 行ID
        type: '@pick(["code_601", "code_602", "code_603", "code_604", "code_605", "code_606"])', // 广告位类型
        width: '@integer(10, 200)', // 宽
        height: '@integer(10, 200)', // 宽
        expressWidth: '@integer(10, 200)', // 宽
        expressHeight: '@integer(10, 200)', // 宽
        intervalTime: '@integer(1, 1440)', // 间隔分钟时间
        orientation: '@pick([0, 1])', // 版式，0-横版 1-竖版
        remark: '@cword(2,4)', // 描述
        rewardNum: '@integer(1, 1440)', // 中奖号码

        createBy: '@cword(2,4)',
        createTime: '@integer(1616570591186, 1616656991186)',
        lastModifyBy: '@cword(2,4)',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}

export default list
