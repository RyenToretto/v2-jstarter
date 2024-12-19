const list = {
  code: '0000',
  message: '0000',
  success: true,
  result: {
    total: 2,
    'lists|10': [
      {
        'id|+1': 1001, // 行ID
        'channelPlacementId|+1': 42312, // 渠道广告位ID
        aid: '@pick([6666, 6667, 6668, 6669])', // 广告位ID
        name: '@cword(2,4)', // 名称
        basePrice: '@integer(10, 200)', // 底价
        type: '@pick(["code_601", "code_602", "code_603", "code_604", "code_605", "code_606"])', // 广告位类型

        createBy: '@cword(2,4)',
        createTime: '@integer(1616570591186, 1616656991186)',
        lastModifyBy: '@cword(2,4)',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}

export default list
